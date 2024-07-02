import { defineArrayMember, defineField, defineType } from "sanity";
import { page } from "./page";
import { featurePage } from "./featurePage";

export const recommendedCarousel = defineType({
  type: "array",
  name: "recommendedCarousel",
  title: "Recommended content",
  of :[
    defineArrayMember({
      title: "Recommended Card",
      type: "object",
      name: "recommended card",
      fields: [
        defineField({type: "string", name: "title"}),
        defineField({type: "reference", name: "card", to: [page, featurePage]})
      ]
    })
  ]
})