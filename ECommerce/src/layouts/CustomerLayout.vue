<template>
  <div class="flex flex-col min-h-screen">
    <menu class="p-4 flex flex-row items-center gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">Products</RouterLink>
    </menu>
    <div class="flex-1 p-4">
      <RouterView/>
    </div>
  </div>
</template>
<script lang="ts">

</script>
