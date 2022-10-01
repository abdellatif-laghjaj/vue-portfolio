<template>
  <div class="container w-11/12 sm:w-3/5 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>My </span>
      <span class="text-primary">Skills</span>
    </div>

    <!-- Section Content -->
    <div class="mt-3 w-11/12 sm:w-auto">
      <div class="tabs tabs-boxed">
        <a class="tab flex-1 h-12 font-bold">Tab 1</a>
        <a class="tab flex-1 h-12 font-bold tab-active">Tab 2</a>
        <a class="tab flex-1 h-12 font-bold">Tab 3</a>
      </div>

      <div class="tab-content w-full">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>