import { defineArrayMember, defineField, defineType } from "sanity";

export const faq = defineType({
  type: "array",
  name: "faq",
  title: "FAQ",
  of :[
    defineArrayMember({
      title: "FAQ Entry",
      type: "object",
      name: "faq entry",
      fields: [
        defineField({type: "string", name: "title"}),
        defineField({type: "string", name: "description"})
      ]
    })
  ]
})