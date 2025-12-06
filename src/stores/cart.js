
import { reactive, ref, computed } from "vue";
import { DELIVERY_OPTIONS } from "@/constants";
import { TVA } from "@/constants";
import { productsStore } from "@/stores/products";

const cart = reactive([]);
const selectedDeliveryId = ref("standard");


const addReference = (productId) => {
  const productIndex = cart.findIndex((p) => p.id === productId);

  if(productIndex != -1) {
     cart[productIndex].quantity = cart[productIndex].quantity + 1;
  } else {
     cart.push({ id: productId, quantity: 1 }); 
  }
}

const setReferenceQuantity = (referenceId, quantity) => {
    const referenceIndex = cart.findIndex((r) => r.id === referenceId);

  if(referenceIndex != -1) {
     cart[referenceIndex].quantity = quantity;
  }
}

const deleteOneById = (referenceId) =>  {
   const referenceIndex = cart.findIndex((r) => r.id === referenceId);

   if(referenceIndex != -1) {
      cart.splice(referenceIndex, 1)
   }
}

const deliveryPrice = computed(() => {
   const option = DELIVERY_OPTIONS.find((o) => o.id === selectedDeliveryId.value);
   return option ? option.price : 0
})


const subTotal = computed(() => {
  return cart
    .reduce((sum, ref) => {
      const product = productsStore.getOneById(ref.id);
      return sum + product.price * ref.quantity;
    }, 0)
    .toFixed(2);
})

const tvaPrice = computed(() => {
  return (Number(subTotal.value) * (TVA / 100)).toFixed(2);
})

const totalPrice = computed(() => {
  return (
    Number(subTotal.value) + Number(tvaPrice.value) + Number(deliveryPrice.value)
  ).toFixed(2);
})

export const cartStore = reactive ({
    cart,
    selectedDeliveryId,
    addReference,
    setReferenceQuantity,
    deleteOneById,
    deliveryPrice,
    subTotal,
    tvaPrice,
    totalPrice
});