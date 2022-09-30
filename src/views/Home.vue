<template>
  <div class="home">
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <div v-for="post in posts" class="post-item" :key="post._id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";

const query = `*[_type == "project"]{
  _id,
  title,
  description,
}[0...50]`;

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
          (posts) => {
            this.loading = false;
            this.posts = posts;
            console.log(this.posts);
          },
          (error) => {
            this.error = error;
          }
      );
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.home h1 {
  text-align: center;

}

.container {
  margin: 0 auto;
  max-width: 42em;
  width: 100%;
}

.post-item {
  box-sizing: border-box;
}
</style>