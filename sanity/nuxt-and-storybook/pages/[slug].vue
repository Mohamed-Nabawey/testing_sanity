<script setup lang="ts">
import { type Page } from "~/sanity/types";

const route = useRoute();
const { locale } = useI18n();

const query = groq`*[ _type == "page" && slug.current == $slug && language == $language][0]`;
const { data: page } = await useSanityQuery<Page>(query, {
  slug: route.params.slug,
  language: locale.value,
});
</script>

<template>
  <section v-if="page" class="blog">
    {{ page }}
  </section>
</template>

<style scoped>

</style>
