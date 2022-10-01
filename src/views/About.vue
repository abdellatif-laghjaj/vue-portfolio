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
        <img src="https://placeimg.com/192/192/people" />
      </div>
    </div>

    <!-- Section Content -->
    <div class="flex flex-col items-center justify-center w-full lg:flex-row my-6">
      <!-- Left Side -->
      <div class="grid flex-grow py-4 px-3 h-75 text-lg card bg-base-300 rounded-box place-items-center">
        Hello World 👋! I'm Abdellatif Laghjaj, a student in computer science. I've been an enthusiast of programming my
        whole life. IMHO, programming is like a game of chess with a machine! I'm interested in web dev, mobile dev, and
        also desktop dev. I'm looking forward to learning more about being a full-stack developer! 😃
      </div>

      <!-- Divider -->
      <div class="divider lg:divider-horizontal"></div>

      <!-- Right Side -->
      <div class="grid flex-grow py-4 px-3 h-75 text-lg card bg-base-300 rounded-box place-items-center">
        You can find me on GitHub and LinkedIn. I'm also a freelancer and a student of University of IBN Zohr. You will
        download my CV by clicking the button below. Biside, if you're interested in a project or you want me to build
        one, you can contact me here.
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