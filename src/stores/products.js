import { reactive, computed } from "vue";
import DB from "@/services/DB";

const products = reactive([]);

const init = async (apiURL) => {
    DB.setApiURL(apiURL)
    products.splice(products.length, 0, ...(await DB.findAll())) ;
}

const getOneById = async (id) => {
    products.splice(products.findIndex((todo) => todo.id === id), 1);
  }

export const productsStore = reactive ({
    init,
    products,
    getOneById
  });