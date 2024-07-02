import { DocumentBadgeDescription } from "sanity";

export function HelloWorldBadge(props: any): DocumentBadgeDescription {
  return {
    label: 'Hello world',
    title: 'Hello I am a custom document badge',
    color: 'success',
  }
}
