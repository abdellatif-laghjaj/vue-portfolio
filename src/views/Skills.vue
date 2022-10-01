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

      <!-- Skills -->
      <div class="flex flex-wrap gap-3 mt-6">
        <!-- Skill -->
        <div class="skill flex items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <div class="skill flex items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <div class="skill flex items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>
        <div class="skill flex items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>
        <div class="skill flex items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>
        <div class="skill flex items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>
        <div class="skill flex items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

      </div>
    </div>
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
.skill {
  width: 110px;
  border-radius: 10px;
  padding: 10px 16px;
}
</style>