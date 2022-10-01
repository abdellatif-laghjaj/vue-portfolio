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
      <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
          <div class="skill-name">
            <span class="font-bold">HTML</span>
          </div>
        </div>

        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-16"/>
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
  border-radius: 10px;
  padding: 10px 16px;
  cursor: pointer;
  position: relative;
  user-select: none;
}

.skill::before,
.skill::after {
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 500ms;
  width: 100%;
}

.skill::before {
  content: "";
  border-radius: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  background: radial-gradient(600px circle at 100px 100px, rgba(255, 255, 255, 0.4), transparent 40%);
  z-index: 2;
}
</style>