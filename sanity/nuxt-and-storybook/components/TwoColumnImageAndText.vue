<template>
  <div class="w-full">
    <div :class="`pb-10 flex max-w-6xl mx-auto${props.rev ? ' flex-row-reverse' : ''}`">
      <div class="w-1/2 flex justify-center px-8">
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
      <div class="w-1/2 px-8">
        <h6 class="text-green-500 uppercase mb-4">{{ props.subtitle }}</h6>
        <Header3 :text="props.title" color="white"/>
        <p class="leading-relaxed text-lg text-white">{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, default: "https://picsum.photos/200/300" },
  alt: { type: String, default: "Missing Alt" },
  title: { type: String, default: "Title" },
  subtitle: { type: String, default: "Subtitle" },
  description: { type: String, default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  rev: { type: Boolean, default: false }
});
</script>