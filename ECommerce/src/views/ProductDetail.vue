<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      productId: this.$route.params.id,
    }
  },
  methods: {
    getProduct() {
      // Lógica para buscar os detalhes do produto usando this.productId
    },
  },
})
</script>
