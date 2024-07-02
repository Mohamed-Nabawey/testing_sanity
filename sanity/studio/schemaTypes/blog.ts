import {defineField, defineType} from 'sanity'
import {RiPagesLine} from 'react-icons/ri'

export const blog = defineType({
  name: 'blog',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),    
    // for localization
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'content',
      type: 'contentLibraryBlogNew',
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
})
