<template>
    <h3 class="text-3xl font-bold mb-4" :style="{color: props.color}">{{ props.text }}</h3>
</template>

<script setup>
const props = defineProps({
    text: {type: String, default: "Example Header"},
    color: {type: String, default: "#fff"}
});
</script>