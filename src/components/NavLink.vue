<template>
  <router-link :to="to">
    <li><a>{{ label }}</a></li>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>