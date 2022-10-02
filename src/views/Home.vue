<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg mb-[80px] sm:mt-0">
        <!-- Avatar -->
        <div class="avatar mb-6">
          <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/src/assets/my_image.png"/>
          </div>
        </div>

        <!-- Name -->
        <h1 class="text-4xl font-bold">Hello World 👋</h1>
        <div class="mockup-code flex items-start flex-col my-3">
          <pre data-prefix="$"><code>npm install @love.js </code></pre>
          <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
          <pre data-prefix=">" class="text-error"><code>error: love not found</code></pre>
        </div>
        <label class="btn btn-primary modal-button w-full sm:w-auto" for="cv-modal">
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
  <input type="checkbox" id="cv-modal" class="modal-toggle"/>
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Download Resume</h3>
      <p class="py-4">My resume is not ready yet, but you can contact me or come back later.</p>
      <div class="modal-action">
        <label for="cv-modal" class="btn">Ok, Got it!</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
</style>