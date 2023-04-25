<template>
  <heading-title title="#4 Project => Vue Router"/>
  <router-link to="/posts">
    Posts
  </router-link>
  <router-view />
</template>

<script>

import HeadingTitle from "@/components/HeadingTitle.vue";

export default {
  name: "RouterOptions",
  components: {HeadingTitle},
}
</script>