<template>
  <div>
    <!-- Preloader -->
    <div class="preloader" v-if="!is_loaded">
      <lottie-player
        src="raw/loader-1.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px"
        loop
        autoplay
      ></lottie-player>
    </div>
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import "@lottiefiles/lottie-player";

let is_loaded = ref(false);
const delay = 4500;

//show preloader for 2 seconds
setTimeout(() => {
  is_loaded.value = true;
}, delay);
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #504c4c;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7a7777;
}

#app {
  user-select: none;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
