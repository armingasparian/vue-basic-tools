<template>
  <div class="cards">
    <card v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          @click="click(pokemon)"
          :class="{
            opace: selectedId && pokemon.id !== selectedId
          }"
          class="opacity-1"
    >
      <template v-slot:title>
        {{ pokemon.name }} #{{ pokemon.id }}
      </template>
      <template v-slot:content>
        <img :src="pokemon.sprite"/>
      </template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/2pokemon/Card.vue";

export default {
  name: "PokemonCards",
  components: {
    Card,
  },
  props: {
    pokemons: {
      type: Array,
      default: []
    },
    selectedId: {
      type: Number,
    }
  },
  methods: {
    click(pokemon) {
      this.$emit('chosen', pokemon)
    },
  }
}
</script>

<style scoped>
img {
  width: 100%;
}

.opace {
  opacity: 0.5;
}

.opacity-1:hover {
  opacity: 1.0;
}
</style>