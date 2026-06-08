<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex flex-col items-center justify-center w-screen h-screen">
    <form class="flex flex-col max-w-[400px] border p-8" @submit.prevent="register">
      <header>
        {{ 'Faça seu registro para acessar nossos serviços!' }}
        <h1>Registrar-se</h1>
      </header>
      <label class="flex flex-col gap-2">
        name
        <InputText v-model="form.name" />
        <span v-if="v$.form.name.$error" class="text-red-500 text-sm">
          {{ v$.form.name.$errors[0].$message }}
        </span>
      </label>
      <label class="flex flex-col gap-2">
        email
        <InputText v-model="form.email" />
        <span v-if="v$.form.email.$error" class="text-red-500 text-sm">
          {{ v$.form.email.$errors[0].$message }}
        </span>
      </label>
      <label class="flex flex-col gap-2">
        password
        <Password type="password" v-model="form.password" :feedback="false" toggle-mask />
        <span v-if="v$.form.password.$error" class="text-red-500 text-sm">
          {{ v$.form.password.$errors[0].$message }}
        </span>
      </label>
      <label class="flex flex-col gap-2">
        confirm password
        <Password type="password" v-model="form.confirmPassword" :feedback="false" toggle-mask />
        <span v-if="v$.form.confirmPassword.$error" class="text-red-500 text-sm">
          {{ v$.form.confirmPassword.$errors[0].$message }}
        </span>
      </label>
      <Button type="submit" :label="'Registrar'" :loading="loading"> Registrar </Button>
    </form>
  </main>
</template>
<script lang="ts">
import RegisterForm from '@/model/register.model'
import { httpClient } from '@/services/config/config'
import { RegisterRest } from '@/services/rest/register.rest'
import useVuelidate from '@vuelidate/core'
import { defineComponent } from 'vue'
import Error from '@/components/Error.vue'
export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Error,
  },
  data() {
    return {
      form: new RegisterForm('', '', '', ''),
      rest: new RegisterRest(httpClient),
      loading: false,
    }
  },
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  validations() {
    return {
      form: {
        name: {
          required: (value: string) => !!value || 'Name is required',
          minLength: (value: string) => value.length >= 3 || 'Name must be at least 3 characters',
        },
        email: {
          required: (value: string) => !!value || 'Email is required',
          email: (value: string) => /^\S+@\S+\.\S+$/.test(value) || 'Email must be valid',
        },
        password: {
          required: (value: string) => !!value || 'Password is required',
          minLength: (value: string) =>
            value.length >= 6 || 'Password must be at least 6 characters',
        },
        confirmPassword: {
          required: (value: string) => !!value || 'Confirm Password is required',
          sameAsPassword: (value: string) => value === this.form.password || 'Passwords must match',
        },
      },
    }
  },
  methods: {
    register() {
      this.loading = true
      this.v$.$validate()
      if (this.v$.$invalid) {
        this.loading = false
        return
      }
      const body = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      }
      this.rest
        .registerUser(body)
        .then(() => {
          this.$router.push('/login')
        })
        .catch((error) => {
          console.error('Registration failed:', error)
        })
        .finally(() => {
          this.loading = false
          this.form.password = ''
          this.form.confirmPassword = ''
        })
    },
  },
})
</script>
