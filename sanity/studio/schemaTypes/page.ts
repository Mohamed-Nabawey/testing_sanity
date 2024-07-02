import { RiPagesLine } from 'react-icons/ri';
import { defineType, defineField, defineArrayMember } from 'sanity'

export const page = defineType({
  type: "document",
  name: "page",
  icon: RiPagesLine,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Title for SEO info',
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'Description for SEO info',
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: 'components',
      type: 'array',
      of: [{type: 'heroBlock'}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      type: "array",
      name: "sections",
      title: "Page sections",
      of: [
        defineArrayMember({
          type: "textBlock",
        }),
        defineArrayMember({
          type: "ctaBlock",
        }),
        defineArrayMember({
          type: "cta",
        }),
        defineArrayMember({
          type: "imageCarousel",
        }),
      ],
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
      subtitle: 'language',
    },
    prepare(selection) {
      return selection
    },
  },
});
