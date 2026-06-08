<template>
  <main>
    <form>
      <header>
        <h1>Registrar-se</h1>
      </header>
      <label>
        Nome:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Senha:
        <input type="password" />
      </label>
      <button type="submit">Registrar</button>
    </form>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RegisterView',
})
</script>
