import CustomerLayout from '@/layouts/CustomerLayout.vue'
import Home from '@/views/Home.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Products from '@/views/Products.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CustomerLayout,
      children: [
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'products',
          component: Products,
        },
        {
          path: 'products/:id',
          component: ProductDetail,
        },
      ],
    },
  ],
})

export default router
