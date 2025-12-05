<script setup>

const props = defineProps({
  product: { type: Object, required: true },
});

const emits = defineEmits(["onAddItem"])

const onAddItem = () => {
  emits("onAddItem", props.product.id)
}

</script>
<template>
  <article class="bg-white rounded-lg overflow-hidden shadow-md">
    <img :src="'https://picsum.photos/300/200?random=' + product.id" alt="Product image" class="w-full" />
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
      <p class="text-gray-700">{{ product.price }} euros</p>
      <button class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        @click="onAddItem">
        Ajouter
      </button>
    </div>
  </article>
</template>
<style scoped></style>