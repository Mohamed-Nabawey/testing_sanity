import {defineField, defineType} from 'sanity'
import SectionBuilder from '../components/SectionBuilder'


export const sectionBuilder = defineType({
  name: 'sectionBuilder',
  type: 'object',
  fields: [
    {
      name: 'components',
      type: 'array',
      of: [
        {type: 'wysiwyg'},
      ],
      components: {
        input: SectionBuilder
      },
    }, 
  ],
})
