<template>
  <h4>{{ post.title }}</h4>
  <p>{{ post.content }}</p>
</template>

<script>
export default {
  name: 'Post',
  props: {
    posts: {
      type: Array,
      default: []
    }
  },
  computed: {
    post() {
      return this.posts.find(x => x.id === parseInt(this.$route.params.id, 10))
    }
  }
}
</script>