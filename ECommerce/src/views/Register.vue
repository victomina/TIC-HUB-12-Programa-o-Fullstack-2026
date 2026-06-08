<template>
  <main>
    <form>
      <header>
        {{ 'Faça seu registro para acessar nossos serviços!' }}
        <h1>Registrar-se</h1>
      </header>
      <label>
        <InputText/>
      </label>
    </form>
  </main>
</template>
<script lang="ts">
import RegisterForm from '@/model/register.model';
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
     form: new RegisterForm('', '', '', ''),
     errors: {
     }
    }
  },
})
</script>
