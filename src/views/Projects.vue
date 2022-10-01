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
      <div class="projects flex flex-wrap -m-4 mt-6">
        <div class="xl:w-1/4 md:w-1/2 p-4 project" v-for="project in projects" :key="project.id">
          <a class="group relative block bg-black">
            <img :src="project.image"
                 class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40"/>

            <div class="relative p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                {{ project.category }}
              </p>
              <p class="text-2xl font-bold text-white">{{ project.title }}</p>
              <div class="mt-64">
                <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="text-sm text-white">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </div>
          </a>
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
  });
}
onMounted(() => {
  fetchProjects();
});

</script>

<style scoped>
.project {
  height: 340px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

</style>