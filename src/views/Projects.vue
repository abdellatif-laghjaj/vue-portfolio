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
      <div class="flex items-center justify-center">
        <div class="tabs tabs-boxed flex items-center justify-between w-[100%] sm:w-72 mt-5">
          <a class="tab h-12 font-bold tab-active" @click="filterProjects('all')" data-cat="all">All</a>
          <a class="tab h-12 font-bold" @click="filterProjects('web')" data-cat="web">Web</a>
          <a class="tab h-12 font-bold" @click="filterProjects('mobile')" data-cat="mobile">Mobile</a>
          <a class="tab h-12 font-bold" @click="filterProjects('desktop')" data-cat="desktop">Desktop</a>
        </div>
      </div>

      <!-- Projects -->
      <div class="projects flex flex-wrap -m-4 mt-4" v-if="loaded">
        <div class="xl:w-1/3 md:w-1/2 p-4 project" v-for="project in filtredProjects" :key="project.id">
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
                  <a :href="project.demo" target="_blank" class="bg-accent p-2 rounded-full" v-if="project.has_demo">
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
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-10" v-else>
        <button class="btn btn-square loading"></button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api.js";

export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      filtredProjects: [],
      loaded: false,
    }
  },
  methods: {
    getProjects() {
      api.get("/projects").then((response) => {
        this.projects = response.data;
        this.filtredProjects = response.data;
        this.loaded = true;
      });
    },
    filterProjects(category) {
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab) => {
        tab.classList.remove("tab-active");
      });

      //add active class to the tab that contains category data attribute
      document.querySelector(`[data-cat=${category}]`).classList.add("tab-active");

      if (category === "all") {
        this.getProjects();
      } else {
        this.filtredProjects = this.projects.filter((project) => project.category === category);
      }
    },
    makeTextShort(text, maxLength) {
      if (text.length > maxLength) {
        return text.substr(0, maxLength) + '...'
      }
      return text
    }
  },
  created() {
    this.getProjects();
  }
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