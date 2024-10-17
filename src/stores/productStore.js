import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    selectedProduct: null
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get('http://localhost:8081/api/product');
      this.products = response.data;
    },
    async fetchProductById(id) {
      const response = await axios.get(`http://localhost:8081/api/product/${id}`);
      this.selectedProduct = response.data;
    },
    async deleteProduct(id) {
      await axios.delete(`http://localhost:8081/api/product/${id}`);
      await this.fetchProducts();
    },
    async updateProduct(id, productData) {
      await axios.put(`http://localhost:8081/api/product/${id}`, productData);
      await this.fetchProducts();
    }
  }
});
