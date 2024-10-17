import { createRouter, createWebHistory } from 'vue-router'
import ProductDetails from '@/components/productDetails.vue'
import ProductList from '@/components/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails
    }

  ]
})

export default router
