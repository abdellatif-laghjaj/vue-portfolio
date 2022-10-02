<template>
  <div class="container w-11/12 sm:w-3/5 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>Contact </span>
      <span class="text-primary">Me</span>
    </div>

    <!-- Section Content -->
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h2 class="text-2xl font-bold">Or <span class="text-primary">Use</span>:</h2>
          <div class="stats stats-vertical h-full shadow">

            <div class="stat">
              <div class="stat-title">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="stat-value text-xl">abdelatiflaghjaj@gmail.com</div>
              <div class="stat-desc">
                Email me for any questions or inquiries.
              </div>
            </div>

            <div class="stat">
              <div class="stat-title">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <div class="stat-value text-xl">+212657735082</div>
              <div class="stat-desc">
                Call me for any questions or inquiries.
              </div>
            </div>

            <div class="stat">
              <div class="stat-title">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="stat-value text-xl">Hay ouled ali, El Guerdane, Morocco</div>
              <div class="stat-desc">
                Visit me for any questions or inquiries.
              </div>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <input type="text" placeholder="Your name" name="name" required class="input input-bordered"/>
            </div>
            <div class="form-control">
              <input type="text" placeholder="Subject" name="subject" required class="input input-bordered"/>
            </div>
            <div class="form-control">
              <input type="email" placeholder="Your email" name="email" required class="input input-bordered"/>
            </div>
            <div class="form-control">
              <textarea rows="3" placeholder="Your message" name="message" required
                        class="textarea h-24 textarea-bordered"></textarea>
            </div>
            <div class="form-control mt-3">
              <button class="btn btn-primary">submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>