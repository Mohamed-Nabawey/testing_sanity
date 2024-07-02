import {defineField, defineType} from 'sanity'
import { Wysiwyg } from '../components/Wysiwyg';

export const wysiwyg = defineType({
  name: 'wysiwyg',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: '',
      type: 'string',
      components: {
        input: Wysiwyg
      }
    }),
  ],
})
