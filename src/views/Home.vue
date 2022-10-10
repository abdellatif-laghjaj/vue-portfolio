<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg mb-[80px] sm:mt-0">
        <!-- Avatar -->
        <div class="avatar mb-6">
          <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/src/assets/my_image.png" />
          </div>
        </div>

        <!-- Name -->
        <h3 class="text-3xl sm:text-4xl font-bold flex items-center justify-center gap-2">
          <span>Abdellatif Laghjaj </span>
          <svg class="w-8 h-8 sm:w-9 sm:h-9 mt-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"></path>
          </svg>
        </h3>
        <div class="mockup-code flex items-start flex-col my-3">
          <pre data-prefix="$"><code>npm install @love.js</code></pre>
          <pre data-prefix=">"
            class="text-warning"><code>installing...<code>{{ installationPercentage }}</code></code></pre>
          <pre data-prefix=">" class="text-error" v-if="isInstalled"><code>error: love not found</code></pre>
          <pre data-prefix="#"
            v-if="isInstalled"><code>try npm install -g @gf.js</code></pre>
        </div>
        <label class="btn btn-primary modal-button w-full" for="cv-modal">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
          </svg>
          <span class="ml-2">download resume</span>
        </label>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" id="cv-modal" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Download Resume</h3>
      <p class="py-4">
        My resume is not ready yet, but you can contact me or come back later.
      </p>
      <div class="modal-action">
        <label for="cv-modal" class="btn">Ok, Got it!</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let installationPercentage = ref("0%");
let isInstalled = ref(false);
let delay = ref(30);
let delayBeforeInstallation = ref(4150);

//increase installation percentage every 100ms

setTimeout(() => {
  startInstallation();
}, delayBeforeInstallation.value);

//start installation
const startInstallation = () => {
  setInterval(() => {
    if (installationPercentage.value === "100%") {
      isInstalled.value = true;
      return;
    }
    installationPercentage.value =
      parseInt(installationPercentage.value) + 1 + "%";
  }, delay.value);
};
</script>

<style scoped>
.hero {
  background-image: url("raw/animated_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
