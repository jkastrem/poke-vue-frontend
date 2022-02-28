<script setup>
import { pokemonsStore as usePokemonsStore } from './store/pokemons'
import PokemonCard from './components/PokemonCard.vue'

const pokemonsStore = usePokemonsStore()
pokemonsStore.refreshPokemonList()
</script>

<template>
  <div class="flex flex-wrap items-center justify-center">
    <PokemonCard 
      v-for="(pokemon, index) in pokemonsStore.pokemonsList"
      :key="index"
      v-bind="pokemon"
    />
  </div>
</template>
