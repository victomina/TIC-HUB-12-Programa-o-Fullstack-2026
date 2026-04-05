/* * This is the main application component for the ECommerce project. * It serves as the entry
point for the Vue.js application and will contain * the overall layout and structure of the app,
including the header, main content area, and footer. *Essa é uma bibliotexca de componentes para o
projeto ECommerce. * Ela serve como ponto de entrada para a aplicação Vue.js e conterá * a estrutura
geral do aplicativo, incluindo o cabeçalho, área de conteúdo principal e rod */
<script lang="ts">
import { Product } from './model/product.model'
import ProductCard from './components/ProductCard.vue'
import { Cart } from './model/cart.model'

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(
          1,
          'Guitarra Encantada',
          100,
          'Uma guitarra mágica que toca sozinha e encanta a todos com suas melodias. Perfeita para músicos de todos os níveis.',
          0,
        ),
        new Product(
          2,
          'Bateria Mágica',
          200,
          'Uma bateria que toca sozinha e cria ritmos incríveis. Ideal para bateristas de todos os estilos.',
          10,
        ),
      ],
    }
  },
  methods: {
    addItem(product: Product) {
      const existItem = this.cart.list.some((item) => item.product.name === product.name)
      if (existItem) {
        const item = this.cart.list.find((item) => item.product.name === product.name)
        return item ? (item.quantity += 1) : null
      } else {
        this.cart.list.push({ product, quantity: 1 })
        this.cart.total += 1
      }
    },
    decItem() {
      this.cart.total -= 1
    },
  },
}
</script>

<template>
  <main>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-4">
      <!-- //cards que mostrm em uma coluna   -->
      <div v-for="product in products" :key="product.name">
        <ProductCard :product="product" @on-click="addItem" />
      </div>
    </section>
  </main>
  <h1>Carrinho</h1>
  <div v-for="item in cart.list" :key="item.product.id">
    <h3>{{ item.product.name }}</h3>
  </div>
  <p>Total: {{ cart.total }}</p>
  <Button :label="'Primevue'"></Button>
</template>
