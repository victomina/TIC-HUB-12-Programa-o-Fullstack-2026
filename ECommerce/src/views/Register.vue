<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex flex-col items-center justify-center w-screen h-screen">
    <form class="flex flex-col max-w-">
      <header>
        {{ 'Faça seu registro para acessar nossos serviços!' }}
        <h1>Registrar-se</h1>
      </header>
      <label class="flex flex-col gap-2">
        name
        <InputText v-model="form.name"/>
      </label>
      <label class="flex flex-col gap-2">
        email
        <InputText v-model="form.email"/>
      </label>
      <label class="flex flex-col gap-2">
        password
        <InputText type="password" v-model="form.password"/>
      </label>
      <label class="flex flex-col gap-2">
        confirm password
        <InputText type="password" v-model="form.confirmPassword"/>
      </label>
    </form>
  </main>
</template>
<script lang="ts">
import RegisterForm from '@/model/register.model';
import useVuelidate from '@vuelidate/core';
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
     form: new RegisterForm('', '', '', ''),
     errors: {
     }
    }
  },
  setup() {
    return{
      v$: useVuelidate()
    }
  },
  validation () {
    return {
      form: {
        name: {
          required: (value: string) => !!value || 'Name is required',
          minLength: (value: string) => value.length >= 3 || 'Name must be at least 3 characters'
        },
        email: {
          required: (value: string) => !!value || 'Email is required',
          email: (value: string) => /^\S+@\S+\.\S+$/.test(value) || 'Email must be valid'
        },
        password: {
          required: (value: string) => !!value || 'Password is required',
          minLength: (value: string) => value.length >= 6 || 'Password must be at least 6 characters'
        },
        confirmPassword: {
          required: (value: string) => !!value || 'Confirm Password is required',
          sameAsPassword: (value: string) => value === this.form.password || 'Passwords must match'
        }
      }
    }
  }
})
</script>
