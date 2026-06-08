<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <span v-if="v$.form.$errors.length > 0">
    <p v-for="error in v$.form.$errors" :key="error.$uid">
      {{ error.$message }}
    </p>
  </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    v$: {
      type: Object,
      required: true
    }
  }
})
</script>
