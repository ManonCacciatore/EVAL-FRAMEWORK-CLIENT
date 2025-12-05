<script setup>
import CartItem from './CartItem.vue';
import { cartStore } from '@/stores/cart';
import { DELIVERY_OPTIONS } from '@/constants';

</script>
<template>
  <aside class="w-full md:w-1/3 px-4">
    <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
    <div class="cart bg-white rounded-lg shadow animate__animated">
      <ul class="divide-y divide-gray-200 space-y-4 p-6">
        <CartItem v-for="reference in cartStore.cart" :key="reference.id" :reference="reference"
          @on-delete="cartStore.deleteOneById" @on-quantity-change="cartStore.setReferenceQuantity" />
      </ul>
      <div class="bg-gray-50">
        <div class="p-6">
          <div class="flex justify-between mb-1">
            <span><strong>Total HTVA:</strong></span>
            <span>€50.00</span>
          </div>
          <div class="flex justify-between mb-1">
            <span><strong>Taxe (20%):</strong></span>
            <span>€10.00</span>
          </div>
          <div class="flex justify-between items-center my-8">
            <span><strong>Livraison:</strong></span>
            <select v-model="cartStore.selectedDeliveryId">
              <option v-for="option in DELIVERY_OPTIONS" :key="option.id" :value="option.id">
                {{ option.label }} - €{{ option.price }}
              </option>
            </select>
          </div>
          <div class="flex justify-between font-bold mb-1 text-xl">
            <span><strong>Total Général:</strong></span>
            <span>€65.00</span>
          </div>
          <button class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cart-btn">
            Procéder au paiement
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped></style>