import { defineField, defineType } from "sanity";

export const anchorLink = defineType({
  type: "object",
  name: "anchorLink",
  fields: [
    defineField({
      type: "string",
      name: "text",
    }),
    defineField({
      type: "string",
      name: "link",
    }),
  ]
})