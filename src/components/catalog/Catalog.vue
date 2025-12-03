<script setup>
    import Product from './Product.vue';
    import { reactive , onMounted } from "vue";
    import DB from "@/services/DB";

    const props = defineProps({
        apiURL : {type: String, required: true}
    });

    const products = reactive([]);

    onMounted(async () => {
        DB.setApiURL(props.apiURL)
        products.splice(products.length, 0, ...(await DB.findAll())) ;

    });
</script>
<template>
    <section class="w-full md:w-2/3 px-4 mb-8">
        <!-- Products Section -->
        <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Product card example -->
          <Product v-for="product in products" :key="product.id" :product="product"/>
        </div>
    </section>
</template>
<style scoped></style>