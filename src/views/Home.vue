<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-lg mb-[50px] sm:mt-0">
        <!-- Avatar -->
        <div class="avatar mb-6">
          <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people"/>
          </div>
        </div>

        <!-- Name -->
        <h1 class="text-4xl font-bold">Hello World 👋</h1>
        <div class="mockup-code flex items-start flex-col my-3">
          <pre data-prefix="$"><code>npm install life</code></pre>
          <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
          <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
        </div>
        <button class="btn btn-primary">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
          </svg>
          <span class="ml-2">Download CV</span>
        </button>
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