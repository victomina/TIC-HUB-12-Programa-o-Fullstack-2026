<template>
  <div class="not-found-page">
    <div class="not-found-card">
      <h1>Produto não encontrado</h1>
      <p>Desculpe, não encontramos o produto que você procurava.</p>
      <p>Verifique o nome ou as informações e tente novamente.</p>
      <router-link to="/" class="btn-home">Voltar para a loja</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
});
</script>


