<template>
  <!-- <article class="w - [200px]">


      <button @click="addItem(product)">Adicionar ao Carrinho</button>
      </article> -->
  <Card :style="{ width: '100px', minWidth: '200px', maxWidth: '320px' }">
    <template #header>
      <img :src="'https://picsum.photos/id/1/200/300'" class="w-full object-cover" />
    </template>
    <template #title>
      <h1>Nome do produto: {{ product.name }}</h1>
    </template>
    <template #content>
      <p>Descrição: {{ product.description }}</p>
      <p>Preço: ${{ product.price.toFixed(2).replace('.', ',') }}</p>
      <p>Desconto: {{ product.discount }}%</p>
    </template>
    <template #footer>
      <Button @click="addItem(product)">Adicionar ao Carrinho</Button>
    </template>
  </Card>
</template>
<script lang="ts">
import { Product } from '../model/product.model'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  emits: ['on-click'],
  methods: {
    addItem(product: Product) {
      this.$emit('on-click', product)
    },
  },
})
</script>
