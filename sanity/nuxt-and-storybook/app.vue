<template>
  <div class="grid grid-cols-2 gap-4">
    <button class="bg-amber-700 border-2 p-4" @click="globalCounter.increment">Click to Increment Counter</button>
    <div class="bg-slate-400 p-4">
      <p class="">counter: {{  globalCounter.counter }}</p>
      <p class="">doubleCounter: {{ globalCounter.doubleCounter}}</p>
    </div>
  </div>
  <NuxtPage />
</template>

<script setup>
useSeoMeta({
  title: 'Nuxt and Storybook App',
});
const globalCounter = useGlobalCounterStore();
</script>
