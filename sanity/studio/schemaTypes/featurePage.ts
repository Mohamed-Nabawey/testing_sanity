import { defineArrayMember, defineField, defineType } from "sanity";

export const featurePage = defineType({
  type: "document",
  name: "featurePage",
  title: "Feature Page",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type:"slug",
      name:"slug",
      options: {
        source: "title",
        maxLength: 96
      },
    }),
    defineField({
      name: 'hero',
      title: "Hero",
      type: 'heroBlock',
    }),
    defineField({
      type: "array",
      name: "anchorLinks",
      title: "Anchor Links",
      of: [
        defineArrayMember({
          type: 'anchorLink',
          name: 'links',
          title: 'Links',
        })
      ]
    }),
      defineField({
        type: "array",
        name: "bodySections",
        title: "Body",
        of: [
          defineArrayMember({
            type: 'wistiaMedia',
            name: "Wistia Video"
          }),
          defineArrayMember({
            type: "textBlock",
          }),
          defineArrayMember({
            type: "ctaBlock",
          }),
          defineArrayMember({
            type: "imageCarousel",
          }),
          defineArrayMember({
            type:"twoColumnImageAndText",
          }),
        ],
      }),
      defineField({
        type:"recommendedCarousel",
        name: "recommendedContent",
      }),
      defineField({
        type:"ctaBlock",
        name: "learnMoreCta",
      }),
      defineField({
        type:"faq",
        name: "faq",
      }),
      defineField({
        type: 'userQuote',
        name: 'userQuote',
        title: "User Quote",
      }),
      defineField({
        type:"ctaBlock",
        name: "bottomCta",
      }),
      defineField({
        name: 'language',
        type: 'string',
        readOnly: true,
        hidden: true,
      }),
    ],

    preview: {
      select: {
        title: 'title',
        language: 'language',
        media: 'mainImage',
      },
      prepare(selection) {
        return {...selection, subtitle: selection.language}
      },
    },
  })
