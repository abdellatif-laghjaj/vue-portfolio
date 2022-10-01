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

      <!-- Filter -->
      <div class="btn-group mt-4 flex items-center justify-center">
        <button class="btn">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
        <button class="btn btn-active">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
        <button class="btn">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
        <button class="btn">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>

      <!-- Projects -->
      <div class="projects flex flex-wrap -m-4 mt-4" v-if="loaded">
        <div class="xl:w-1/3 md:w-1/2 p-4 project" v-for="project in projects" :key="project.id">
          <div class="image">
            <img :src="project.image" alt="project image">
            <div class="details">
              <h2>{{ project.title }}</h2>
              <p>{{ makeTextShort(project.description, 80) }}</p>
              <div class="tags flex gap-2 items-center justify-center flex-wrap">
                <span class="badge badge-secondary" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <div class="more">
                <a class="read-more badge badge-primary font-bold py-2">
                  {{ project.category }}
                </a>
                <div class="icon-links flex flex-row items-center gap-1">
                  <a :href="project.demo" target="_blank" class="bg-primary p-2 rounded-full">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fill-rule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                  </a>
                  <a :href="project.link" target="_blank" class="bg-secondary p-2 rounded-full">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center" v-else>
        <lottie-player
            src="loading.json"
            background="transparent"
            speed="1"
            style="width: 240px; height: 240px"
            loop autoplay>

        </lottie-player>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import api from "../api.js";

let projects = ref([]);
let loaded = ref(false);

//fetch skills from api
const fetchProjects = () => {
  api.get("/projects").then((response) => {
    projects.value = response.data;
    loaded.value = true;
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
.image {
  position: relative;
  flex: 1;
  max-width: 460px;
  height: 320px;
  overflow: hidden;
  border-radius: 10px;
}

.image img {
  opacity: 0.8;
  height: 100%;
  object-fit: cover;
  position: relative;
  vertical-align: top;
  transition: 0.6s;
  transition-property: opacity;
}

.image:hover img {
  opacity: 0.2;
}

.image .details {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  width: 100%;
  height: 100%;
}

.image .details h2 {
  text-align: center;
  margin-top: 8px;
  font-size: 25px;
  font-weight: bold;
  opacity: 0;
  transition: all 0.6s ease;
}

.image .details p {
  margin: 30px 30px 0 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  opacity: 0;
  transition: 0.6s;
  transition-property: opacity, transform;
}

.image .tags {
  margin: 30px 30px 0 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  opacity: 0;
  transition: 0.6s;
  transition-property: opacity, transform;
}

.image:hover .details h2 {
  opacity: 1;
}

.image:hover .details p {
  opacity: 1;
  transform: translateY(-20px);
}

.image:hover .tags {
  opacity: 1;
  transform: translateY(-20px);
}

.more {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  bottom: -80px;
  transition: 0.6s;
  transition-property: bottom;
}

.image:hover .more {
  bottom: 0;
}
</style>