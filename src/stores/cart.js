
import { reactive, ref, computed } from "vue";
import DB from "@/services/DB";
import { DELIVERY_OPTIONS } from "@/constants";

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
   const option = DELIVERY_OPTIONS.find((o) => o.id === selectedDeliveryId);
   return option ? option.price : 0
})


// Calcul du prix total des produits
// Calcul de la TVA





export const cartStore = reactive ({
    cart,
    selectedDeliveryId,
    addReference,
    setReferenceQuantity,
    deleteOneById,
    deliveryPrice
});