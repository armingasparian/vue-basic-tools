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
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  name: "VueX",
  components: {HeadingTitle},
  setup() {
    const store = useStore()

    const click = (post) => {
      store.commit('posts/setPostId', post.id)
    }

    const fetchData = () => {
      store.dispatch('posts/fetch', 'POST')
    }

    // const currentPost = computed(() => {
    //   return store.state.posts.find(x => {
    //     return x.id === store.state.postId
    //   })
    // })

    onMounted(() => {
      fetchData()
    })

    return {
      postId: computed(() => store.state.postId),
      posts: computed(() => store.state.posts.all),
      click,
      fetchData,
      currentPost: computed(() => store.getters['posts/currentPost'])
    }
  }
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