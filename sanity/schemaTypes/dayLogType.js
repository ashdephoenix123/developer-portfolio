import { defineArrayMember, defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

import {
  DAY_LOG_CATEGORIES,
  DEFAULT_CATEGORY,
  MAX_ENTRIES_PER_DAY,
  MAX_ENTRY_LENGTH,
} from "../../utils/dayLog";

// One document per day. The calendar page writes these through /api/day-log,
// but they stay editable here as a fallback.
export const dayLogType = defineType({
  name: "dayLog",
  title: "Day Log",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "note",
      title: "Your day's highlight",
      type: "text",
      rows: 4,
      description:
        "The standout highlight, achievement, or reflection for the day.",
    }),
    defineField({
      name: "entries",
      title: "Entries",
      type: "array",
      validation: (Rule) => Rule.max(MAX_ENTRIES_PER_DAY),
      of: [
        defineArrayMember({
          type: "object",
          name: "entry",
          fields: [
            defineField({
              name: "text",
              title: "What you did",
              type: "string",
              validation: (Rule) => Rule.required().max(MAX_ENTRY_LENGTH),
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: DAY_LOG_CATEGORIES.map(({ value, label }) => ({
                  value,
                  title: label,
                })),
              },
              initialValue: DEFAULT_CATEGORY,
            }),
            defineField({
              name: "done",
              title: "Struck through",
              type: "boolean",
              description: "Shows the line crossed out, like scratching it off on paper.",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "text", category: "category", done: "done" },
            prepare({ title, category, done }) {
              return {
                title: done ? `✓ ${title}` : title,
                subtitle: category || DEFAULT_CATEGORY,
              };
            },
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Date, newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { date: "date", note: "note", entries: "entries" },
    prepare({ date, note, entries }) {
      const count = entries?.length || 0;
      return {
        title: date || "No date set",
        subtitle: [note, `${count} ${count === 1 ? "entry" : "entries"}`]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});
