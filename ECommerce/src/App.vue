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
    }
  },
  methods: {
    additem() {
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
      <h1>Welcome to the ECommerce App</h1>
      <p>total: {{ cart.total + 1 }}</p>
    </article>
    <button @click="additem()">Add to Cart</button>
    <button @click="decItem"></button>
  </main>
</template>

<style></style>
