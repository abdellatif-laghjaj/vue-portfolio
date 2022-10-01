<template>
  <div class="container w-11/12 sm:w-3/5 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>My </span>
      <span class="text-primary">Skills</span>
    </div>

    <!-- Section Content -->
    <div class="skills-content">
      <p class="skills-text text-center">
        Here are some of my <span class="text-secondary">skills</span> and <span
          class="text-secondary">technologies</span> that I've
        been working with.
      </p>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import api from "../api.js";

let projects = ref([]);

//fetch skills from api
const fetchProjects = () => {
  api.get("/projects").then((response) => {
    projects.value = response.data;
    console.log(projects.value);
  });
}
onMounted(() => {
  fetchProjects();
});

</script>

<style scoped>
</style>