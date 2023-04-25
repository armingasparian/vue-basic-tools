<template>
  <heading-title title="#5 Project => VueX"/>
  <button v-for="post in posts" :key="post.id" @click="click(post)">
    {{ post.title }}
  </button>
  <p>{{ postId }}</p>

  <div v-if="currentPost">
    <h2>{{ currentPost.title }}</h2>
    <h4>{{ currentPost.content }}</h4>
  </div>
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle.vue";

export default {
  name: "VueXOptions",
  components: {HeadingTitle},
  created() {
    this.$store.dispatch('posts/fetch')
  },
  computed: {
    posts() {
      return this.$store.state.posts.all
    },
    currentPost() {
      return this.$store.getters['posts/currentPost']
    }
  },
  methods: {
    click(post) {
      this.$store.commit('posts/setPostId', post.id)
    }
  },
}
</script>

<style scoped>
p {
  font-size: 40px;
}

button {
  font-size: 24px;
  background: aqua;
  border-radius: 8px;
  padding: 10px 16px;
  outline: unset;
  margin: 0 10px;
  cursor: pointer;
}
</style>