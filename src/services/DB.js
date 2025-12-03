export default class DB {
  static setApiURL(data) {
    this.apiURL = data;
  }
  static async findAll() {
    const response = await fetch(this.apiURL + "products");
    return response.json();
  }

  static async create(data) {
    const response = await fetch(this.apiURL + "products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data,
        price: data,
      }),
    });
    return response.json();
  }

   static async deleteOneById(id) {
    const response = await fetch(this.apiURL + "products/" + id, {
      method: "DELETE",
    });
    return response;
  }

  static async updateOne(product) {
    const response = await fetch(this.apiURL + "products/" + product.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: product.name,
        price: product.price,
      }),
    });
    return response;
  }
}