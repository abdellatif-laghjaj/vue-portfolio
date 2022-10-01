<template>
  <div class="container w-11/12 sm:w-3/5 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>My </span>
      <span class="text-primary">Skills</span>
    </div>

    <!-- Section Content -->
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import api from "../api.js";

let skills = ref([]);

//fetch skills from api
const fetchSkills = () => {
  api.get("/skills").then((response) => {
    skills.value = response.data;
  });
}
onMounted(() => {
  fetchSkills();
});

</script>

<style scoped>

</style>