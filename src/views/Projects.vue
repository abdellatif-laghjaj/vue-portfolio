<template>
  <div class="container w-11/12 sm:w-full mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>My </span>
      <span class="text-primary">Projects</span>
    </div>

    <!-- Section Content -->
    <div class="skills-content">
      <p class="skills-text text-center">
        Here are some of my <span class="text-secondary">projects</span> that I've
        been working on.
      </p>

      <!-- Projects -->
      <div class="flex flex-wrap -m-4 mt-6">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400"
                 alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401"
                 alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402"
                 alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403"
                 alt="content">
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon
              disrupt edison bulbche.</p>
          </div>
        </div>
      </div>
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