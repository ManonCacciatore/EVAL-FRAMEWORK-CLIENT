import { reactive, computed } from "vue";
import DB from "@/services/DB";

const products = reactive([]);

const init = async (apiURL) => {
    DB.setApiURL(apiURL)
    products.splice(products.length, 0, ...(await DB.findAll())) ;
}

const getOneById = (id) => {
    const product = products.find((p) => p.id === id)
    return product
  }

export const productsStore = reactive ({
    init,
    products,
    getOneById
  });