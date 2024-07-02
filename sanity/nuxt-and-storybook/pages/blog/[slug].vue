<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import { type Blog } from "~/sanity/types";

const route = useRoute();
const { locale } = useI18n();

const query = groq`*[ _type == "blog" && slug.current == $slug && language == $language][0]`;
const { data: blog } = await useSanityQuery<Blog>(query, {
  slug: route.params.slug,
  language: locale.value,
});
</script>

<template>
  <section class="blog bg-gray-100">
    <div class="container mx-auto px-4 pt-8" v-if="blog">
      <Breadcrumb />
      <div class="post-header position-relative">
        <img
          v-if="blog.content?.pageImage"
          class="post-cover object-cover w-100"
          :src="$urlFor(blog.content.pageImage).width(1920).url()"
          alt="Cover image"
        />
        <div v-else class="post-cover--none" />

        <div class="post-read position-absolute px-6 py-7 z-1 flex gap-3 max-w-64">
          <svg
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.485 2C9.65141 2 2.5 9.16902 2.5 18H4.5C4.5 10.271 10.7586 4 18.485 4V2ZM2.5 18C2.5 26.831 9.65141 34 18.485 34V32C10.7586 32 4.5 25.729 4.5 18H2.5ZM18.485 34C27.3316 34 34.5 26.8329 34.5 18H32.5C32.5 25.7271 26.2284 32 18.485 32V34ZM34.5 18C34.5 9.16706 27.3316 2 18.485 2V4C26.2284 4 32.5 10.2729 32.5 18H34.5Z"
              fill="#2F4265"
            ></path>
            <path
              d="M19.335 10.5H17.085V19.5L24.96 24.225L26.085 22.38L19.335 18.375V10.5Z"
              fill="#2F4265"
            ></path>
          </svg>
          <div class="post-read-info text-sm">
            <strong>READ TIME:</strong><br /> {{ blog.content?.contentLibraryReadTime?.readTime }}
          </div>
        </div>
      </div>
      <div class="post-container max-w-screen-lg pt-24 color-gray-500 text-lg">
        <h1 class="post-title">{{ blog.title }}</h1>
      </div>
      <div v-html="blog.content?.mainContent?.value"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.post__container {
  max-width: 50vw;
}
</style>
