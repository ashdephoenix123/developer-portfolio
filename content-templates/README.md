# Content templates — Import JSON

Write a blog post or case study as a `.json` file, then upload it from the
**Import JSON** tab in Sanity Studio (`/studio`). Only logged-in project
members can access Studio, so the importer is private by default.

Start from [post.sample.json](./post.sample.json) or
[case-study.sample.json](./case-study.sample.json).

## File shape

One document object, or an array of them for a bulk import.

| Field        | Required | Notes                                                                 |
| ------------ | -------- | --------------------------------------------------------------------- |
| `_type`      | yes      | `"post"` or `"caseStudy"`                                              |
| `title`      | yes      | Plain string                                                           |
| `slug`       | no       | Generated from the title if omitted; normalized to `kebab-case`        |
| `subTitle`   | no       | Teaser line shown on cards / used as SEO description                   |
| `author`     | no       | Author **slug or name** — must already exist in Studio                 |
| `categories` | no       | Array of category **slugs or titles** — must already exist (errors otherwise) |
| `body`       | no       | Array of content blocks, see below                                     |
| `mainImage`  | ignored  | Images can't be imported from JSON — add in Studio after import; the site shows a default thumbnail until then |

## Body blocks

- **Plain string** → a normal paragraph.
- **`{ "_type": "block", "style": "h2", "text": "..." }`** → heading/quote.
  Styles: `normal`, `h1`–`h4`, `blockquote`. Add `"listItem": "bullet"` for list items.
- **Rich text** → use `children` spans instead of `text`:
  `{ "text": "bold", "marks": ["strong"] }`, `{ "text": "italic", "marks": ["em"] }`,
  or `{ "text": "a link", "link": "https://..." }`.
- **`{ "_type": "code", "language": "javascript", "code": "..." }`** → code block
  (optional `filename`).

You never need to write `_key`, `_id`, `markDefs`, or reference objects — the
importer generates all of that.

## Import behavior

- **Draft mode (default):** documents are created as drafts for review; publish
  them from Studio.
- **Slug collisions:** if a document with the same type + slug exists, the
  importer stops and asks you to tick "Overwrite existing" per document.
- **Missing author/category:** the import errors and lists what's available —
  create them in Studio first.
