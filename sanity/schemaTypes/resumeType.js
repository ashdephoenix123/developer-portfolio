import { defineField, defineType } from "sanity";

export const resumeType = defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "A label for this resume (e.g. \"Frontend Dev Resume 2026\")",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "resumeFile",
      title: "Resume File",
      type: "file",
      description: "Upload your resume as a PDF",
      options: {
        accept: ".pdf",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description:
        "Mark this resume as the active one. Only one resume should be active at a time — the active resume is shown on the homepage.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      isActive: "isActive",
    },
    prepare({ title, isActive }) {
      return {
        title: title || "Untitled Resume",
        subtitle: isActive ? "✅ Active" : "Draft",
      };
    },
  },
});
