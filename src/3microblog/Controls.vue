<template>
  <button @click="click">Like</button>
  {{ post.likes }}
  <hashtag v-for="hashtag in post.hashtags" :key="hashtag" :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from "@/3microblog/Hashtag.vue";
import {store} from "@/3microblog/store";

export default {
  name: "Controls",
  components: {Hashtag},
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const click = () => {
      store.incrementLike(props.post)
    }
    return {
      click,
    }
  }
}
</script>
