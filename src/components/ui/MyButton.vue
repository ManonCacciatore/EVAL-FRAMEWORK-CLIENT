<script setup>
const props = defineProps({
    type: { type: String, default: "button" },
});
</script>

<template>
    <button :type="type" class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <slot />
    </button>
</template>

<style scoped></style>