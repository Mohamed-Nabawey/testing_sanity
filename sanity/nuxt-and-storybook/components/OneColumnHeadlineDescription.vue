<template>
    <div
    :class="{
      'pb-5': true,
      'text-white': props.overlayColor
    }"
    :style="
    props.backgroundType === 'color'?
    {
      backgroundColor: props.backgroundColor
    } :
    {
      backgroundImage: props.backgroundImage
    }"
    componet-metadata-attrs>
      <div>
          <h1 class="text-white text-center font-black text-6xl">{{ props.headline }}</h1>
          <div v-html="description"></div>
          <div class="mt-8 flex justify-center">
            <SmallButton v-for="button of props.buttons" v-bind="button" />
          </div>
      </div>
    </div>
</template>

<script setup>
import { getComponentProps } from './componentProps';
import SmallButton from './SmallButton.vue';

const props = defineProps({
  description: { type: String, default: "" },
  headline: { type: String, default: "" },
  buttons: { type: Array, default: () => []},
  ...getComponentProps()
})
</script>
