/* * This is the main application component for the ECommerce project. * It serves as the entry
point for the Vue.js application and will contain * the overall layout and structure of the app,
including the header, main content area, and footer. *Essa é uma bibliotexca de componentes para o
projeto ECommerce. * Ela serve como ponto de entrada para a aplicação Vue.js e conterá * a estrutura
geral do aplicativo, incluindo o cabeçalho, área de conteúdo principal e rod */
<script lang="ts">
export default {
  data() {
    return {
      cart: {
        items: [],
        total: 0,
      },
      product: {
        name: 'Guitarra Encantada',
        price: 100,
        description: 'Product Description',
        discount: 0,
      },
    }
  },
  methods: {
    addItem() {
      this.cart.total += 1
    },
    decItem() {
      this.cart.total -= 1
    },
  },
}
</script>

<template>
  <main>
    <article>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Discount: {{ product.discount }}%</p>
    </article>
    <button @click="addItem()">Adicionar ao Carrinho</button>
    <button @click="decItem()">Remover do Carrinho</button>

    <article>
      <h1>Welcome to the ECommerce App</h1>
      <p>total: {{ cart.total + 1 }}</p>
    </article>
    <button @click="addItem()">Adicionar ao Carrinho</button>
    <button @click="decItem()">Remover do Carrinho</button>
  </main>
</template>

<style></style>
