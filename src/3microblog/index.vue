<template>
  <heading-title title="#3 Project => Microblog"/>
  <input
      :value="currentTag"
      @input="setHashtag"
  />
  <div class="cards">
    <card v-for="post in filterPosts" :key="post.id">
      <template v-slot:title>
        {{ post.title }}
      </template>
      <template v-slot:content>
        {{ post.content }}
      </template>
      <template v-slot:description>
        <controls :post="post"/>
      </template>
    </card>
  </div>
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle.vue";
import {store} from "@/3microblog/store";
import Card from "@/2pokemon/Card.vue"
import Controls from "@/3microblog/Controls.vue";
import {computed} from "vue";

export default {
  name: "Microblog",
  components: {Controls, HeadingTitle, Card},
  setup() {
    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }

    return {
      setHashtag,
      filterPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
}

input {
  width: 270px;
  height: 42px;
  border-radius: 8px;
  box-shadow: 0 1px 3px darkgrey;
  border: 1px solid silver;
  outline: none;
  padding: 0 10px;
  margin: 0 5px 20px 5px;
}
</style>