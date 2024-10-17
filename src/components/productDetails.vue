<template>
  <div class="container">
    <h1>Product Details</h1>
    <p><strong>Name:</strong> {{ product.name }}</p>
    <p><strong>Price:</strong> {{ product.price }}</p>
    <router-link to="/">Back to list</router-link>
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const productStore = useProductStore();
    const route = useRoute();

    onMounted(() => {
      productStore.fetchProductById(route.params.id);
    });

    return {
      product: productStore.selectedProduct
    };
  }
};
</script>

<style>
.container {
  margin: 20px;
}
</style>
