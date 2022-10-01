<template>
  <div class="container w-11/12 sm:w-3/5 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>About </span>
      <span class="text-primary">Me</span>
    </div>

    <!-- Avatar -->
    <div class="avatar mt-3">
      <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://placeimg.com/192/192/people"/>
      </div>
    </div>

    <!-- Section Content -->
    <div class="flex flex-col h-100 w-full lg:flex-row my-6">
      <!-- Left Side -->
      <div class="flex-1 flex-grow py-4 px-3 h-full text-lg card bg-base-300 rounded-box">
        <p class="mb-6">
          Hello World 👋! I'm <span class="text-secondary">Abdellatif Laghjaj</span> <span
            class="text-secondary">full-stack</span> developer and a student in <span
            class="text-secondary">computer science</span>. I've
          been an enthusiast of <span class="text-secondary">programming</span> my
          whole life. IMHO, programming is like a game of chess with a machine! I'm interested in <span
            class="text-secondary">web dev</span>, <span class="text-secondary">mobile dev</span>, and
          also <span class="text-secondary">desktop dev</span>.
        </p>
      </div>

      <!-- Divider -->
      <div class="divider lg:divider-horizontal"></div>

      <!-- Right Side -->
      <div class="flex-grow flex-1 py-4 px-3 h-full text-lg card bg-base-300 rounded-box">
        <p>
          You can find me on <span class="text-secondary">GitHub</span> and <span class="text-secondary">LinkedIn</span>.
          I'm also a <span class="text-secondary">freelancer</span> and a student of University of <span
            class="text-secondary">IBN Zohr</span>. You can
          download my <span class="text-secondary">CV</span> by clicking the <span class="text-secondary">button</span>
          below. Biside, if you're interested in a project or you want me to build
          one, you can contact me
          <router-link to="/contact" class="text-secondary">here</router-link>
          .😃 <br>

          <button class="btn btn-primary mt-2 w-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
            </svg>
            <span class="ml-2">Download CV</span>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>