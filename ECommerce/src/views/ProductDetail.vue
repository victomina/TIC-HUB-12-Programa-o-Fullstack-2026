<template>
  <div>
    <ProductCard v-if="product" :product="product" />
  </div>
</template>

<script lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { Product } from '@/model/product.model'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      productId: this.$route.params.id,
      product: {} as Product | undefined,
    }
  },
  components: {
    ProductCard,
  },
  methods: {
    getProduct() {
      // Lógica para buscar os detalhes do produto usando this.productId
      this.product = [
        new Product(
          1,
          'Guitarra Encantada',
          100,
          'Uma guitarra mágica que toca sozinha e encanta a todos com suas melodias. Perfeita para músicos de todos os níveis.',
          0,
        ),
      ].find((p) => p.id === parseInt(this.productId as string))
    },
  },
})
</script>
