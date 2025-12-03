<script setup>
  import AppHeader from './components/AppHeader.vue';
  import Catalog from './components/catalog/Catalog.vue';
  import Cart from './components/cart/Cart.vue';
  import AppFooter from './components/AppFooter.vue';
</script>

<template>

  <AppHeader />
  <main class="container mx-auto py-8 px-4 flex flex-wrap">
    <Catalog />
    <Cart />
  </main>
  <AppFooter />

</template>

<style scoped></style>
