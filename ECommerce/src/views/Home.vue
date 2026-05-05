<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { ProductRest } from '@/services/rest/product.rest'
import ProductCard from '@/components/ProductCard.vue'
import { Cart } from '@/model/cart.model'
import { Product } from '@/model/product.model'
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
  computed: {
    rest(): ProductRest {
      return new ProductRest()
    },
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
    goToDetail(product: Product) {
      this.$router.push(`/product/${product.id}`)
    },
    getProducts() {
      const params = {
        page: 1,
        limit: 10,
      }
      this.rest.getAll(params).then((res: Product) => {
        this.products = res.data.data.map((product: Product) => {
          return new Product(
            product.id,
            product.name,
            product.price,
            product.description,
            product.discount,
          )
        })
      })
    },
    mounted() {
      this.getProducts()
    },
  },
}
</script>

<template>
  <main>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-4">
      <!-- //cards que mostrm em uma coluna   -->
      <div v-for="product in products" :key="product.name">
        <div @click="goToDetail(product)">
          <ProductCard :product="product" @on-click="addItem" />
        </div>
      </div>
    </section>
  </main>

  <h1>Carrinho</h1>
  <div v-for="item in cart.list" :key="item.product.id">
    <h3>{{ item.product.name }}</h3>
  </div>

  <div v-if="cart.list.length === 0">
    <h1>{{ 'Não existem itens no carrinho' }}</h1>
  </div>

  <p>Total: {{ cart.total }}</p>
  <Button :label="'Primevue'"></Button>
</template>
