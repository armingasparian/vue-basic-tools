<template>
  <heading-title title="#2 Project => Pokemon Evolutions"/>
  <div class="cards">
    <pokemon-cards
        :pokemons="pokemons"
        @chosen="fetchEvolution"
        :selectedId="selectedId"
    />
    <pokemon-cards
        :pokemons="evolutions"
    />
  </div>
</template>

<script>
import PokemonCards from "@/2pokemon/PokemonCards.vue";
import HeadingTitle from "@/components/HeadingTitle.vue";

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]
export default {
  name: "Slots",
  components: {
    HeadingTitle,
    PokemonCards
  },
  data() {
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null,
    }
  },
  async created() {
    this.pokemons = await this.fetchData(IDS)
  },
  methods: {
    // async fetchData() {
    //   const response = await window.fetch(`${api}/1`)
    //   const json = await response.json()
    //   this.2pokemon = {
    //     id: json.id,
    //     name: json.name,
    //     sprite: json.sprites.other['official-artwork'].front_default,
    //     types: json.types.map(type => type.type.name)
    //   }
    //   console.log(response)
    //   console.log(json)
    //   console.log(this.2pokemon)
    // }

    async fetchData(ids) {
      const responses = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)))
      const json = await Promise.all(responses.map(data => data.json()))
      return json.map(datum => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name)
      }))
    },
    async fetchEvolution(pokemon) {
      this.evolutions = await this.fetchData(
          [pokemon.id + 1, pokemon.id + 2]
      )
      this.selectedId = pokemon.id;
    },
  }
}
</script>

<style scoped>
.cards {
  display: flex;
}

</style>