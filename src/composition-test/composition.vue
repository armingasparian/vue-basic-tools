<template>
  <heading-title title="Test => Compositions-test"/>
  <div class="composition">
    <button @click="a++">{{ a }}</button>
    <button @click="b++">{{ b }}</button>
    <p>{{ total }}</p>

    <div v-for="number in history" :key="number">
      <p>{{ number }}</p>
    </div>
  </div>
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle.vue";
import {useNumbers} from "@/composition-test/useNumbers";

export default {
  name: "CompositionTest",
  components: {HeadingTitle},
  setup: function () {
    return useNumbers()
  }
}
</script>

<style scoped>
button {
  width: 200px;
  height: 200px;
  font-size: 40px;
}

p {
  font-size: 40px;
}
</style>