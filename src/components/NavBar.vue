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
          <NavLink to="/about" label="About"/>
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
        <NavLink to="/about" label="About"/>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn">Get started</a>
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