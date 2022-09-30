<template>
  <div class="navbar bg-base-100 shadow-md">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <NavLink to="/" label="Home"/>
          <NavLink to="/about" label="About"/>
          <NavLink to="/skills" label="Skills"/>
          <NavLink to="/projects" label="Projects"/>
          <NavLink to="/contact" label="Contact"/>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">
        Abdel<span class="text-primary">.</span>
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <NavLink to="/" label="Home"/>
        <NavLink to="/about" label="About"/>
        <NavLink to="/skills" label="Skills"/>
        <NavLink to="/projects" label="Projects"/>
        <NavLink to="/contact" label="Contact"/>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-circle">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "NavBar",
  components: {NavLink}
}
</script>

<style scoped>

</style>