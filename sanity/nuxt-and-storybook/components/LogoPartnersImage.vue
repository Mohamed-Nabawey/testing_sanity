<template>
  <div class="w-32">
    <picture>
      <!-- <source
        type="image/webp"
        srcset="/zink/600webp/global-assets/img/edu/science-olympiad-logo-transparent_552324.png"
        media="(min-width: 100px)"
        > -->
      <img
        zink="thumb"
        :alt="props.alt"
        lazy-observed="true"
        loading="lazy"
        decoding="async"
        :src="props.src"
        >
    </picture>
  </div>
</template>

<script setup>
const props = defineProps({
    src: { type: String, default: "https://picsum.photos/200/300" },
    alt: { type: String, default: "Missing Alt" }
});
</script>