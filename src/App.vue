<script setup>
import { pokemonsStore as usePokemonsStore } from './store/pokemons'

import TheButton from './components/common/TheButton.vue'
import PokemonCard from './components/PokemonCard.vue'

const pokemonsStore = usePokemonsStore()
pokemonsStore.refreshPokemonList()
</script>

<template>
  <div class="flex justify-center">
    <TheButton
      text="Go to Favorites"
      class="mt-4"
    />
  </div>
  <div class="flex flex-wrap items-center justify-center">
    <PokemonCard 
      v-for="pokemon in pokemonsStore.pokemonsList"
      :key="pokemon.id"
      v-bind="pokemon"
    />
  </div>
</template>
