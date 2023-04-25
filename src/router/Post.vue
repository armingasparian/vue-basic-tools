<template>
    <h4>{{post.title}}</h4>
    <p>{{post.content}}</p>
</template>

<script>

import {computed} from "vue";
import {useRoute} from "vue-router";
import {usePosts} from "@/router/usePosts";

export default {
  name: 'Post',
  setup(){
    const route = useRoute()
    const postsStore = usePosts()

    const post = computed(() => postsStore.posts.value.find(x => x.id === parseInt(route.params.id, 10)))
    return{
      post
    }
  }
}
</script>