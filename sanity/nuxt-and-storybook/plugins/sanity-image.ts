import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

export default defineNuxtPlugin(() => {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.client)

  function urlFor(source: any) {
    return builder.image(source)
  }

  return {
    provide: { urlFor },
  }
})
