<script setup>

    import Product from './Product.vue';
    import { onMounted } from "vue";
    import { productsStore } from '@/stores/products';
    import { cartStore } from '@/stores/cart';

    const props = defineProps({
        apiURL : {type: String, required: true}
    });

    onMounted(async () => {
        productsStore.init(props.apiURL)

    });

</script>
<template>
    <section class="w-full md:w-2/3 px-4 mb-8">
        <!-- Products Section -->
        <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Product card example -->
          <Product v-for="product in productsStore.products" :key="product.id" :product="product" @on-add-item="cartStore.addReference"/>
        </div>
    </section>
</template>
<style scoped></style>