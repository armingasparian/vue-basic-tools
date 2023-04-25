<template>
  <div class="hashtag" @click="setHashtag">
    #{{ hashtag }}
  </div>
</template>

<script>

import {store} from "@/3microblog/store";
export default {
  emits: ['setHashtag'],
  name: "Hashtag",
  props: {
    hashtag: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const setHashtag = () => {
      store.setHashtag(props.hashtag)
    }
    return {
      setHashtag
    }
  }
}
</script>

<style scoped>
.hashtag {
  text-decoration: underline;
}

.hashtag:hover {
  color: cornflowerblue;
}
</style>