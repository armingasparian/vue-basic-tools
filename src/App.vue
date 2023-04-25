<template>
    <form-validation/>
    <slots/>
    <composition-test/>
    <microblog/>
    <router/>
<!--    <router-options/>-->
    <vue-x/>
<!--    <vue-x-options/>-->
</template>

<script>

import FormValidation from "./1form-validation/index.vue";
import Slots from "./2pokemon/index.vue";
import Composition from "@/composition-test/composition.vue";
import Microblog from "@/3microblog/index.vue";
import CompositionTest from "@/composition-test/composition.vue";
import PokemonCards from "@/2pokemon/PokemonCards.vue";
import Router from "@/router/index.vue";
import RouterOptions from "@/router-options/index.vue";
import VueX from "@/vuex/index.vue";
import VueXOptions from "@/vuex-options/index.vue";

export default {
  components: {
    VueXOptions,
    VueX,
    RouterOptions,
    Router,
    PokemonCards,
    CompositionTest,
    Microblog,
    Composition,
    FormValidation,
    Slots
  },
}
</script>