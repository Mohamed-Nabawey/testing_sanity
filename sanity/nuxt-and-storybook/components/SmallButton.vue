<template>
    <div>
        <a :class="{
            'text-lg': true,
            'px-5': true,
            'py-2' : true,
            'border-b-2': true,
            'border-2': props.active,
            'rounded': props.active,
            'border-transparent': !props.active,
            'text-white': true,
            'cursor-pointer': true,
            'hover:border-green-500': true,
            'hover:border-b-2': true,
            'transition': true,
        }"
        :href="props.href">
        {{ text }}
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    active: { type: Boolean, default: false },
    text: { type: String, default: "Example Small Button" },
    href: { type: String, default: "#" },
});
</script>