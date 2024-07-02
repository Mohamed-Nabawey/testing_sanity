<template>
    <div class="max-w-6xl mx-auto py-10">
        <h1 class="font-black text-slate-900 text-2xl text-center mb-8">{{props.logoTitle}}</h1>
        <div class="flex justify-between">
            <LogoPartnersImage v-for="image of props.row1" :src="image"></LogoPartnersImage>
        </div>
        <div class="flex justify-around">
            <LogoPartnersImage v-for="image of props.row2" :src="image"></LogoPartnersImage>
        </div>
    </div>
</template>

<script setup>
import LogoPartnersImage from './LogoPartnersImage.vue';

const props = defineProps({
    row1: { type: Array, default: () => []},
    row2: { type: Array, default: () => []},
    logoTitle: { type: String, default: "" }
});
</script>