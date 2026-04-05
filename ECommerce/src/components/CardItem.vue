<template>
  <div>
    <!-- <article class="w - [200px]">


      <button @click="addItem(product)">Adicionar ao Carrinho</button>
      </article> -->
    <Card :style="{ width: '100px', minWidth: '200px', maxWidth: '320px' }">
      <template #header>
        <img :src="'https://picsum.photos/id/1/200/300'" class="w-full object-cover" />
      </template>
      <template #title> </template>
      <template #footer>
        <Button @click="onRemoveItem(product)">Remover do Carrinho</Button>
      </template>
    </Card>
  </div>
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
  emits: ['on-remove'],
  methods: {
    onRemoveItem(product: Product) {
      this.$emit('on-remove', product)
    },
  },
})
</script>
