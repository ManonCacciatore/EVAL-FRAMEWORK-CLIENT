<script setup>
import { productsStore } from '@/stores/products';

const props = defineProps({
  reference: { type: Object, required: true },
});

const emits = defineEmits(["onDelete", "onQuantityChange"])

const product = productsStore.getOneById(props.reference.id)

const onInput = (event) => {
  emits("onQuantityChange", props.reference.id, event.target.value)
}

const onDelete = () => {
  emits("onDelete", props.reference.id)
}
</script>
<template>
  <li class="flex justify-between items-center py-3">
    <div class="flex items-center">
      <img :src="'https://picsum.photos/300/200?random=' + product.id" alt="Product"
        class="h-12 w-12 rounded-full mr-4" />
      <div>
        <span class="font-semibold">{{ product.name }}</span>
        <span class="block text-sm text-gray-500">€{{ product.price }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <input type="number" class="form-input mt-1 block w-16 text-center rounded text-gray-700 border-gray-300 border"
        :value="props.reference.quantity" min="0" @input="onInput" />
      <button class="ml-2 text-red-500 hover:text-red-700" @click="onDelete">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </li>
</template>
<style scoped></style>