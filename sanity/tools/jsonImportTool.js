import React, { useRef, useState } from "react";
import { useClient } from "sanity";
import { IntentLink } from "sanity/router";
import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Code,
  Container,
  Flex,
  Radio,
  Spinner,
  Stack,
  Text,
} from "@sanity/ui";
import { UploadIcon, CheckmarkCircleIcon } from "@sanity/icons";
import { apiVersion } from "../env";

const DOC_TYPES = ["post", "caseStudy"];
const KNOWN_FIELDS = [
  "_type",
  "_id",
  "title",
  "slug",
  "subTitle",
  "subtitle",
  "author",
  "categories",
  "body",
  "mainImage",
];
const KNOWN_STYLES = ["normal", "h1", "h2", "h3", "h4", "blockquote"];

const genKey = () =>
  Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);

const genId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${genKey()}-${genKey()}`;

const slugify = (text) =>
  String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);

// Drafts and their published versions come back as separate rows; collapse
// them onto the base id so references always point at the published id.
const collectByBaseId = (rows) => {
  const map = new Map();
  rows.forEach((row) => {
    const isDraft = row._id.startsWith("drafts.");
    const baseId = isDraft ? row._id.slice("drafts.".length) : row._id;
    const entry = map.get(baseId) || { ...row, _id: baseId, hasPublished: false };
    if (!isDraft) entry.hasPublished = true;
    map.set(baseId, entry);
  });
  return [...map.values()];
};

const resolveRef = (value, rows, kind, errors, warnings) => {
  if (typeof value === "object" && value !== null && value._ref) {
    return { _type: "reference", _ref: value._ref };
  }
  const needle = String(value).trim().toLowerCase();
  const match = rows.find(
    (r) =>
      (r.slug && r.slug.toLowerCase() === needle) ||
      ((r.name || r.title || "").trim().toLowerCase() === needle)
  );
  if (!match) {
    const available =
      rows.map((r) => r.slug || r.name || r.title).filter(Boolean).join(", ") ||
      "none exist yet";
    errors.push(`${kind} "${value}" not found. Available: ${available}.`);
    return null;
  }
  if (!match.hasPublished) {
    warnings.push(
      `${kind} "${value}" only exists as a draft — publish it in Studio, otherwise publishing this document will fail.`
    );
  }
  return { _type: "reference", _ref: match._id };
};

const normalizeChildren = (rawChildren, markDefs, errors, at) =>
  rawChildren.map((child) => {
    if (typeof child === "string") {
      return { _type: "span", _key: genKey(), text: child, marks: [] };
    }
    if (child && typeof child === "object") {
      const marks = Array.isArray(child.marks) ? [...child.marks] : [];
      if (typeof child.link === "string" && child.link) {
        const def = { _type: "link", _key: genKey(), href: child.link };
        markDefs.push(def);
        marks.push(def._key);
      }
      return {
        _type: "span",
        _key: child._key || genKey(),
        text: String(child.text ?? ""),
        marks,
      };
    }
    errors.push(`${at}: children must be strings or { "text": "..." } objects.`);
    return { _type: "span", _key: genKey(), text: "", marks: [] };
  });

const normalizeBody = (body, errors, warnings) => {
  if (body === undefined || body === null) {
    warnings.push('No "body" provided — the document will have no content.');
    return [];
  }
  if (!Array.isArray(body)) {
    errors.push('"body" must be an array (blocks, or plain strings for paragraphs).');
    return [];
  }
  const out = [];
  body.forEach((item, i) => {
    const at = `body[${i}]`;
    if (typeof item === "string") {
      out.push({
        _type: "block",
        _key: genKey(),
        style: "normal",
        markDefs: [],
        children: [{ _type: "span", _key: genKey(), text: item, marks: [] }],
      });
      return;
    }
    if (!item || typeof item !== "object") {
      errors.push(`${at}: must be a string or an object with a "_type".`);
      return;
    }
    const type = item._type || "block";
    if (type === "block") {
      const style = item.style || "normal";
      if (!KNOWN_STYLES.includes(style)) {
        warnings.push(
          `${at}: style "${style}" is not one of ${KNOWN_STYLES.join(", ")} — it may not render as expected.`
        );
      }
      const rawChildren = Array.isArray(item.children)
        ? item.children
        : item.text !== undefined
          ? [{ text: item.text }]
          : null;
      if (!rawChildren) {
        errors.push(`${at}: block needs "children" (or a "text" shortcut).`);
        return;
      }
      const markDefs = (Array.isArray(item.markDefs) ? item.markDefs : []).map(
        (d) => ({ ...d, _key: d._key || genKey() })
      );
      const children = normalizeChildren(rawChildren, markDefs, errors, at);
      const block = {
        _type: "block",
        _key: item._key || genKey(),
        style,
        markDefs,
        children,
      };
      if (item.listItem) {
        block.listItem = item.listItem;
        block.level = item.level || 1;
      }
      out.push(block);
      return;
    }
    if (type === "code") {
      if (typeof item.code !== "string" || !item.code.trim()) {
        errors.push(`${at}: code block needs a non-empty "code" string.`);
        return;
      }
      const codeBlock = {
        _type: "code",
        _key: item._key || genKey(),
        language: item.language || "javascript",
        code: item.code,
      };
      if (item.filename) codeBlock.filename = item.filename;
      out.push(codeBlock);
      return;
    }
    if (type === "image") {
      if (item.asset && item.asset._ref) {
        out.push({ ...item, _key: item._key || genKey() });
      } else {
        warnings.push(
          `${at}: inline image skipped — images can't be imported from JSON; add them in the editor after import.`
        );
      }
      return;
    }
    errors.push(
      `${at}: unknown _type "${type}". Allowed: block, code, image (or a plain string).`
    );
  });
  return out;
};

const prepareEntry = (raw, index, authorRows, categoryRows, seenSlugs) => {
  const errors = [];
  const warnings = [];

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {
      doc: null,
      label: `Entry ${index + 1}`,
      errors: [`Entry ${index + 1} is not a JSON object.`],
      warnings,
    };
  }

  Object.keys(raw).forEach((k) => {
    if (!KNOWN_FIELDS.includes(k)) warnings.push(`Unknown field "${k}" was ignored.`);
  });

  const type = raw._type;
  if (!DOC_TYPES.includes(type)) {
    errors.push(`"_type" must be "post" or "caseStudy" (got ${JSON.stringify(type ?? null)}).`);
  }
  if (raw._id) warnings.push('Custom "_id" ignored — existing documents are matched by slug.');

  const title = typeof raw.title === "string" ? raw.title.trim() : "";
  if (!title) errors.push('"title" is required and must be a non-empty string.');

  let slug = typeof raw.slug === "string" ? raw.slug : raw.slug?.current;
  if (!slug && title) {
    slug = slugify(title);
    warnings.push(`No "slug" provided — generated "${slug}" from the title.`);
  } else if (slug) {
    const normalized = slugify(slug);
    if (normalized !== slug) warnings.push(`Slug "${slug}" was normalized to "${normalized}".`);
    slug = normalized;
  }
  if (!slug) errors.push('"slug" is required (or provide a title to generate one).');

  if (slug && type) {
    const dupeKey = `${type}:${slug}`;
    if (seenSlugs.has(dupeKey)) {
      errors.push(`Duplicate: another entry in this file already uses slug "${slug}".`);
    }
    seenSlugs.add(dupeKey);
  }

  if (raw.subtitle !== undefined && raw.subTitle === undefined) {
    warnings.push('Field "subtitle" was read as "subTitle".');
  }
  const subTitle = raw.subTitle ?? raw.subtitle;

  const hasImageRef = Boolean(raw.mainImage?.asset?._ref);
  if (raw.mainImage !== undefined && !hasImageRef) {
    warnings.push(
      '"mainImage" ignored — images can\'t be imported from JSON. Add it in Studio later; the site shows a default thumbnail until then.'
    );
  }

  let author = null;
  if (raw.author !== undefined && raw.author !== null && raw.author !== "") {
    author = resolveRef(raw.author, authorRows, "Author", errors, warnings);
  } else {
    warnings.push("No author set — you can add one in Studio later.");
  }

  let categories = null;
  if (raw.categories !== undefined) {
    if (!Array.isArray(raw.categories)) {
      errors.push('"categories" must be an array of category slugs (or titles).');
    } else {
      categories = raw.categories
        .map((cat) => resolveRef(cat, categoryRows, "Category", errors, warnings))
        .filter(Boolean)
        .map((ref) => ({ ...ref, _key: genKey() }));
    }
  }

  const body = normalizeBody(raw.body, errors, warnings);

  const doc = {
    _type: type,
    title,
    slug: { _type: "slug", current: slug || "" },
    body,
  };
  if (typeof subTitle === "string" && subTitle.trim()) doc.subTitle = subTitle.trim();
  if (author) doc.author = author;
  if (categories && categories.length) doc.categories = categories;
  if (hasImageRef) doc.mainImage = raw.mainImage;

  return { doc, label: title || `Entry ${index + 1}`, errors, warnings };
};

function JsonImportTool() {
  const client = useClient({ apiVersion });
  const fileInputRef = useRef(null);

  const [phase, setPhase] = useState("idle"); // idle | checking | ready | importing | done
  const [fileName, setFileName] = useState(null);
  const [entries, setEntries] = useState([]);
  const [mode, setMode] = useState("draft"); // draft | publish
  const [fatalError, setFatalError] = useState(null);
  const [results, setResults] = useState([]);

  const reset = () => {
    setPhase("idle");
    setFileName(null);
    setEntries([]);
    setFatalError(null);
    setResults([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const processFile = async (file) => {
    reset();
    setFileName(file.name);
    setPhase("checking");
    try {
      const text = await file.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch (err) {
        throw new Error(`This file is not valid JSON: ${err.message}`);
      }
      const rawDocs = Array.isArray(parsed) ? parsed : [parsed];
      if (rawDocs.length === 0) throw new Error("The file contains an empty array.");

      const [authorRows, categoryRows] = await Promise.all([
        client
          .fetch('*[_type == "author"]{ _id, name, "slug": slug.current }')
          .then(collectByBaseId),
        client
          .fetch('*[_type == "category"]{ _id, title, "slug": slug.current }')
          .then(collectByBaseId),
      ]);

      const seenSlugs = new Set();
      const prepared = rawDocs.map((raw, i) =>
        prepareEntry(raw, i, authorRows, categoryRows, seenSlugs)
      );

      await Promise.all(
        prepared.map(async (entry) => {
          if (!entry.doc || !entry.doc.slug.current || !DOC_TYPES.includes(entry.doc._type)) return;
          const rows = await client.fetch(
            "*[_type == $type && slug.current == $slug]{ _id }",
            { type: entry.doc._type, slug: entry.doc.slug.current }
          );
          if (rows.length) {
            entry.existingBaseId = rows[0]._id.replace(/^drafts\./, "");
            entry.existingHasDraft = rows.some((r) => r._id.startsWith("drafts."));
          }
        })
      );

      setEntries(prepared.map((p, i) => ({ ...p, key: i, overwrite: false })));
      setPhase("ready");
    } catch (err) {
      setFatalError(err.message || String(err));
      setPhase("idle");
    }
  };

  const handleImport = async () => {
    setPhase("importing");
    setFatalError(null);
    try {
      const tx = client.transaction();
      const planned = entries.map((entry) => {
        const baseId = entry.existingBaseId || genId();
        tx.createOrReplace({
          ...entry.doc,
          _id: mode === "draft" ? `drafts.${baseId}` : baseId,
        });
        // Publishing over an existing doc: discard its stale draft too,
        // otherwise Studio keeps showing the old draft on top.
        if (mode === "publish" && entry.existingHasDraft) tx.delete(`drafts.${baseId}`);
        return {
          baseId,
          title: entry.doc.title,
          type: entry.doc._type,
          replaced: Boolean(entry.existingBaseId),
        };
      });
      await tx.commit();
      setResults(planned);
      setPhase("done");
    } catch (err) {
      setFatalError(`Import failed: ${err.message || String(err)}`);
      setPhase("ready");
    }
  };

  const canImport =
    entries.length > 0 &&
    entries.every((e) => e.doc && e.errors.length === 0 && (!e.existingBaseId || e.overwrite));

  return (
    <Container width={1} padding={4}>
      <Stack space={4} paddingY={4}>
        <Stack space={3}>
          <Text size={3} weight="semibold">
            Import JSON
          </Text>
          <Text size={1} muted>
            Upload a .json file containing one blog post or case study (or an array of
            them). Keys, references and slugs are handled for you — see{" "}
            <code>content-templates/post.sample.json</code> in the repo for the format.
            Images are skipped: add them in Studio after import.
          </Text>
        </Stack>

        {fatalError && (
          <Card padding={3} radius={2} tone="critical">
            <Text size={1}>{fatalError}</Text>
          </Card>
        )}

        {phase === "done" ? (
          <Stack space={3}>
            <Card padding={3} radius={2} tone="positive">
              <Flex align="center" gap={2}>
                <Text size={1}>
                  <CheckmarkCircleIcon />
                </Text>
                <Text size={1} weight="semibold">
                  {results.length} document{results.length > 1 ? "s" : ""} imported as{" "}
                  {mode === "draft" ? "draft(s) — review and publish in Studio" : "published"}
                </Text>
              </Flex>
            </Card>
            {results.map((r) => (
              <Card key={r.baseId} padding={3} radius={2} border>
                <Flex align="center" justify="space-between" gap={3}>
                  <Flex align="center" gap={2}>
                    <Badge tone="primary">{r.type}</Badge>
                    <Text size={1}>{r.title}</Text>
                    {r.replaced && <Badge tone="caution">replaced existing</Badge>}
                  </Flex>
                  <Text size={1}>
                    <IntentLink intent="edit" params={{ id: r.baseId, type: r.type }}>
                      Open in editor →
                    </IntentLink>
                  </Text>
                </Flex>
              </Card>
            ))}
            <Box>
              <Button text="Import another file" mode="ghost" onClick={reset} />
            </Box>
          </Stack>
        ) : (
          <Stack space={4}>
            <Card padding={4} radius={2} border tone="transparent">
              <Flex align="center" gap={3}>
                <Button
                  icon={UploadIcon}
                  text={fileName ? "Choose a different file" : "Choose a .json file"}
                  tone="primary"
                  mode="ghost"
                  disabled={phase === "checking" || phase === "importing"}
                  onClick={() => fileInputRef.current?.click()}
                />
                {fileName && (
                  <Code size={1}>{fileName}</Code>
                )}
                {phase === "checking" && <Spinner muted />}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,application/json"
                  style={{ display: "none" }}
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0];
                    if (file) processFile(file);
                  }}
                />
              </Flex>
            </Card>

            {entries.map((entry, index) => (
              <Card key={entry.key} padding={4} radius={2} border>
                <Stack space={3}>
                  <Flex align="center" gap={2}>
                    <Badge tone={entry.doc && entry.errors.length === 0 ? "primary" : "critical"}>
                      {entry.doc?._type || "invalid"}
                    </Badge>
                    <Text size={2} weight="semibold">
                      {entry.label}
                    </Text>
                  </Flex>
                  {entry.doc && (
                    <Text size={1} muted>
                      slug: {entry.doc.slug.current || "—"} · {entry.doc.body.length} content
                      block{entry.doc.body.length === 1 ? "" : "s"}
                    </Text>
                  )}

                  {entry.errors.length > 0 && (
                    <Card padding={3} radius={2} tone="critical">
                      <Stack space={2}>
                        {entry.errors.map((msg, i) => (
                          <Text key={i} size={1}>
                            {msg}
                          </Text>
                        ))}
                      </Stack>
                    </Card>
                  )}

                  {entry.warnings.length > 0 && (
                    <Card padding={3} radius={2} tone="caution">
                      <Stack space={2}>
                        {entry.warnings.map((msg, i) => (
                          <Text key={i} size={1}>
                            {msg}
                          </Text>
                        ))}
                      </Stack>
                    </Card>
                  )}

                  {entry.errors.length === 0 && entry.existingBaseId && (
                    <Card padding={3} radius={2} tone="caution">
                      <Flex align="center" gap={2}>
                        <Checkbox
                          id={`overwrite-${entry.key}`}
                          checked={entry.overwrite}
                          onChange={() =>
                            setEntries((prev) =>
                              prev.map((e, i) =>
                                i === index ? { ...e, overwrite: !e.overwrite } : e
                              )
                            )
                          }
                        />
                        <label htmlFor={`overwrite-${entry.key}`}>
                          <Text size={1}>
                            A {entry.doc._type} with this slug already exists — tick to
                            overwrite it.
                          </Text>
                        </label>
                      </Flex>
                    </Card>
                  )}
                </Stack>
              </Card>
            ))}

            {entries.length > 0 && (
              <Card padding={4} radius={2} border>
                <Stack space={3}>
                  <Text size={1} weight="semibold">
                    Import as
                  </Text>
                  <Flex align="center" gap={2}>
                    <Radio
                      id="mode-draft"
                      name="import-mode"
                      value="draft"
                      checked={mode === "draft"}
                      onChange={() => setMode("draft")}
                    />
                    <label htmlFor="mode-draft">
                      <Text size={1}>Draft — review in Studio, then publish (recommended)</Text>
                    </label>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Radio
                      id="mode-publish"
                      name="import-mode"
                      value="publish"
                      checked={mode === "publish"}
                      onChange={() => setMode("publish")}
                    />
                    <label htmlFor="mode-publish">
                      <Text size={1}>
                        Publish immediately (when overwriting, this also discards any
                        existing draft)
                      </Text>
                    </label>
                  </Flex>
                  <Box>
                    <Button
                      text={
                        phase === "importing"
                          ? "Importing…"
                          : `Import ${entries.length} document${entries.length > 1 ? "s" : ""}`
                      }
                      tone="primary"
                      disabled={!canImport || phase === "importing"}
                      onClick={handleImport}
                    />
                  </Box>
                </Stack>
              </Card>
            )}
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

export const jsonImportTool = {
  name: "import-json",
  title: "Import JSON",
  icon: UploadIcon,
  component: JsonImportTool,
};
