import {DocumentLocationResolver} from 'sanity/presentation'
import {map} from 'rxjs'
/**
 * Tell Presentation tool where documents appear on your site
 */
// Pass 'context' as the second argument
export const locate: DocumentLocationResolver = (params, context) => {
  // Set up locations for post documents
  if (params.type === 'post') {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title,language}`,
      params,
      {perspective: 'previewDrafts'}, // returns a draft article if it exists
    )
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null
        }
        return {
          locations: [
            {
              title: doc.title || 'Untitled',
              href: `/${doc.language}/post/${doc.slug.current}`,
            },
            {
              title: 'Posts',
              href: '/',
            },
          ],
        }
      }),
    )
  }
  if (params.type === 'page' || params.type === 'featurePage' || params.type === "blog") {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title,language}`,
      params,
      {perspective: 'previewDrafts'}, // returns a draft article if it exists
    )
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null
        }
        return {
          locations: [
            {
              title: doc.title || 'Untitled',
              href: `/${doc.language}/${doc.slug.current}`,
            },
          ],
        }
      }),
    )
  }
  return null
}
