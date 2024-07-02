import { defineField, defineType } from "sanity";

export const twoColumnImageAndText = defineType({
  type: "object",
  name: "twoColumnImageAndText",
  title: "Two Column Image and Text",
  fields :[
        defineField({type: "string", name: "title"}),
        defineField({type: "string", name: "text"}),
        defineField({type: "image", name: "image"}),
        defineField({type: "boolean", name: "textLeft", description: "Is Text on the left?"})
  ]
})