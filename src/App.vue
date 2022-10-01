<template>
  <NavBar/>
  <router-view/>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #504c4c;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7a7777;
}
</style>
