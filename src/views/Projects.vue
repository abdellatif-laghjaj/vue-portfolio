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
          <a class="group relative block bg-black h-full">
            <img :src="project.image"
                 class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40"/>
            <div class="relative p-8 h-full">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                {{ project.category }}
              </p>
              <p class="text-xl font-bold text-white">{{ project.title }}</p>
              <div class="mt-10">
                <div
                    class="translate-y-8 bottom-0 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="text-sm text-white">
                    {{ makeTextShort(project.description, 80) }}
                  </p>
                </div>

                <!-- Action Buttons -->
                <div
                    class="translate-y-8 absolute bottom-2 right-2 flex gap-2 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <a :href="project.demo" target="_blank" class="btn btn-circle">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                  </a>
                  <a :href="project.link" target="_blank" class="btn btn-circle btn-outline">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clip-rule="evenodd"></path>
                    </svg>
                  </a>
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

const makeTextShort = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
}

</script>

<style scoped>
.project {
  height: 340px;
}

</style>