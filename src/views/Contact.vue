<template>
  <div class="container w-11/12 mx-auto flex items-center justify-center flex-col">
    <!-- Section Title -->
    <div class="text-4xl font-bold my-3">
      <span>Contact </span>
      <span class="text-primary">Me</span>
    </div>

    <!-- Section Content -->
    <div class="hero flex items-center justify-center flex-col">
      <div class="hero-content flex-col items-center justify-center lg:flex-row-reverse">
        <div class="text-center">
          <div class="stats stats-vertical h-full w-[90%] sm:w-full  shadow w-full">
            <div class="stat flex flex-col items-start">
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

            <div class="stat flex flex-col items-start">
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

            <div class="stat flex flex-col items-start">
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
        <div class="card flex-shrink-0 w-full sm:w-3/5 shadow-xl bg-base-100">
          <form method="post" @submit.prevent="submit">
            <div class="card-body">
              <div class="form-control">
                <input type="text" placeholder="Your name" name="name" required class="input input-bordered"
                       v-model="name">
              </div>
              <div class="form-control">
                <input type="text" placeholder="Subject" name="subject" required class="input input-bordered"
                       v-model="subject">
              </div>
              <div class="form-control">
                <input type="email" placeholder="Your email" name="email" required class="input input-bordered"
                       v-model="email">
              </div>
              <div class="form-control">
              <textarea rows="3" placeholder="Your message" name="message" required
                        class="textarea h-24 textarea-bordered" v-model="message"></textarea>
              </div>
              <div class="form-control mt-3">
                <button class="btn btn-primary">submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Social Media -->
      <h1 class="font-bold text-3xl">Folow me on</h1>
      <div class="mt-4 mb-10 flex items-center justify-center flex-row gap-2">
        <a :href="linkedin" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24" stroke-width="1.5"
               class="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none" stroke="currentColor"
               stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <line x1="8" y1="11" x2="8" y2="16"/>
            <line x1="8" y1="8" x2="8" y2="8.01"/>
            <line x1="12" y1="16" x2="12" y2="11"/>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"/>
          </svg>
        </a>

        <a :href="github" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
               class="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none"
               stroke="currentColor" stroke-linecap="round"
               stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
          </svg>
        </a>

        <a :href="instagram" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
               class="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none"
               stroke="currentColor" stroke-linecap="round"
               stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4"/>
            <circle cx="12" cy="12" r="3"/>
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"/>
          </svg>
        </a>

        <a :href="facebook" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
               class="w-8 h-8 transition delay-75 hover:text-primary hover:scale-125" fill="none"
               stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      linkedin: "https://www.linkedin.com/in/abdellatif-laghjaj/",
      github: "https://github.com/abdellatif-laghjaj",
      facebook: "https://www.facebook.com/abdelatif.laghjaj",
      instagram: "https://www.instagram.com/abdellatif_laghjaj/",
    };
  },
  methods: {
    submit() {
      var templateParams = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      emailjs.send('service_ef8gklo', 'template_twmuwqw', templateParams)
          .then(function (response) {
            alert("Message sent successfully");
          }, function (error) {
            alert("Oops, Something went wrong, please try again later");
          });
    }
  },
}
</script>

<style scoped>

</style>