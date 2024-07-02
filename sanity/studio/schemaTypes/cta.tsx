import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { defineType, defineField } from 'sanity'

function MyStringInput(props: { renderDefault: (arg0: any) => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode> | null | undefined; }) {
  return (
    <div style={{border: '4px solid magenta'}}>
      CUSTOM INPUT: {props.renderDefault(props)}
    </div>
  )
}


export const cta = defineType({
  type: "object",
  name: "cta",
  title: "Call to action",
  fields: [
    defineField({
      type: "string",
      name: "label",
    }),
    defineField({
      type: "string",
      name: "subLabel",
      title: "SUB LABEL",
      components:  {
        input: MyStringInput,
      },
    }),
    defineField({
      type: "url",
      name: "link",
    }),
  ],
});

