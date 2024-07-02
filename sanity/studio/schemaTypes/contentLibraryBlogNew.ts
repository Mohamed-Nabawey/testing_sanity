import {defineField, defineType} from 'sanity'

export const contentLibraryBlogNew = defineType({
  name: 'contentLibraryBlogNew',
  type: 'object',
  fields: [
    defineField({
      name: 'pageImage',
      title: 'Hero image',
      type: 'image',
    }),
    defineField({
      name: 'contentLibraryReadTime',
      type: 'contentLibraryReadTime',
      title: 'Read Time'
    }),
    defineField({
      name: "mainContent",
      title: "Content",
      type: "wysiwyg",
    }),
  ],
});
