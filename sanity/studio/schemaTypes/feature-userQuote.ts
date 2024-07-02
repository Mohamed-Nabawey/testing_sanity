import { defineField, defineType } from "sanity";

export const userQuote = defineType({
  type:"object",
  name: "userQuote",
  title: "User Quote",
  fields: [
    defineField({
      type:"string",
      name: "name",
    }),
    defineField({
      type:"string",
      name: "quote",
    }),
    defineField({
      type: "image",
      name: "userImage"
    }),
  ]
})