<template>
  <div class="container w-11/12 sm:w-4/5 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>My </span>
      <span class="text-primary">Services</span>
    </div>

    <!-- Section Content -->
    <div class="services-content">
      <p class="skills-text text-center">
        Here are some of <span class="text-secondary">services</span> that I provide for my clients.
      </p>

      <div class="flex flex-wrap -m-4 mt-4" v-if="loaded">
        <div class="xl:w-1/3 md:w-1/2 p-4 project" v-for="service in services" :key="service.id">
          <div :class="`card h-full shadow-2xl ${service.color}`">
            <figure class="px-10 pt-10">
              <img :src="service.image" :alt="service.title" class="rounded-xl"/>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title font-bold text-3xl">{{ service.title }}</h2>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api.js";

export default {
  name: "Services",
  data() {
    return {
      services: [],
      loaded: false,
    }
  },
  methods: {
    getServices() {
      api.get('/services')
          .then(response => {
            this.services = response.data;
            this.loaded = true;
          })
          .catch(error => {
            console.log(error);
          });
    },
  },
  created() {
    this.getServices();
  }
}
</script>

<style scoped>

</style>