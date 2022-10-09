<template>
  <div class="container w-11/12 sm:w-3/5 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>My </span>
      <span class="text-primary">Skills</span>
    </div>

    <!-- Section Content -->
    <div class="skills-content mb-4">
      <p class="skills-text text-center">
        Here are some of my <span class="text-secondary">skills</span> and <span
          class="text-secondary">technologies</span> that I've
        been working with.
      </p>

      <!-- Skills -->
      <div class="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6" v-if="loaded">
        <!-- Skill -->
        <div class="skill flex basis-1/3 items-center justify-center flex-col border-primary border-2 gap-3"
          v-for="skill in skills" :key="skill.id">
          <img :src="skill.image" class="w-16" />
          <div class="skill-name">
            <span class="font-bold">{{ skill.title }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-10" v-else>
        <button class="btn btn-square loading"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "../api.js";

let skills = ref([]);
let loaded = ref(false);

//fetch skills from api
const fetchSkills = () => {
  api.get("/skills").then((response) => {
    skills.value = response.data;
    loaded.value = true;
  });
}
onMounted(() => {
  fetchSkills();
});

</script>

<style scoped>
.skill {
  padding: 10px 16px;
  cursor: pointer;
  user-select: none;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.2s ease-in-out;
}

.skill:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>