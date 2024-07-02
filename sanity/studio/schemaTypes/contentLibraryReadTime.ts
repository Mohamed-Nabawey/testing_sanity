import {defineField, defineType} from 'sanity'

export const contentLibraryReadTime = defineType({
  name: 'contentLibraryReadTime',
  type: 'object',
  fields: [
    defineField({
        name: 'showReadTime',
        type: 'boolean',
        initialValue: true,
        options: {
            layout: 'checkbox',
        }
      }),
    defineField({
      name: 'readTime',
      type: 'string',
    }),
  ],
})
