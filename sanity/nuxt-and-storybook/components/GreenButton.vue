<template>
    <a class="
        text-white
        border-green-600
        hover:border-green-800
        transition-all
        duration-500
        bg-green-700
        text-lg
        px-5
        py-4
        inline-block
        font-bold
        border-4
        w-60
        text-center
        uppercase
        "
        :href="props.href">{{ props.text }}</a>
</template>

<script setup>
const props = defineProps({
    text: { type: String, default: "Example Text" },
    href: { type: String, default: "#" }
});
</script>