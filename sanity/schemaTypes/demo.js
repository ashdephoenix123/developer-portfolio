import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const STATES = [
  { title: "Alabama", value: "AL" },
  { title: "Alaska", value: "AK" },
  { title: "Arizona", value: "AZ" },
];

export const demoType = defineType({
  name: "demo",
  title: "Demo",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "link",
      type: "object",
      title: "Link",
      fields: [
        {
          name: "external",
          type: "url",
          title: "URL",
          hidden: ({ parent, value }) => !value && parent?.internal,
        },
        {
          name: "internal",
          type: "reference",
          to: [{ type: "author" }],
          hidden: ({ parent, value }) => !value && parent?.external,
        },
      ],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      readOnly: ({ currentUser }) =>
        !currentUser.roles.find(({ name }) => name === "administrator"),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      title: "U.S. State",
      name: "state",
      type: "string",
      options: {
        list: STATES,
        layout: "dropdown",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      state: "state",
    },
    prepare(selection) {
      const { author, state } = selection;
      const stateName =
        state &&
        STATES.flatMap((option) =>
          option.value === state ? [option.title] : []
        );
      return {
        ...selection,
        subtitle: author && `by ${author}`,
      };
    },
  },
});
