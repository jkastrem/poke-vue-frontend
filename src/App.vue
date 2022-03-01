<script setup>
import { computed, onBeforeMount, reactive } from 'vue'
import { pokemonsStore as usePokemonsStore } from './store/pokemons'
import { availableList, buttonSwitcherListText } from './maps'

import TheButton from './components/common/TheButton.vue'
import PokemonCard from './components/PokemonCard.vue'

const pokemonsStore = usePokemonsStore()

const localState = reactive({
  currentList: availableList.simpleList,
})

function setCurrentListToFavorite() {
  localState.currentList = availableList.favoriteList
}

function setCurrentListToSimple() {
  localState.currentList = availableList.simpleList
}

onBeforeMount(() => {
  pokemonsStore.refreshPokemonList()
})

const pokemonList = computed(() => {
  if (localState.currentList === availableList.favoriteList) return pokemonsStore.favoritePokemons
  else return pokemonsStore.pokemonsList
})

const switcherFunction = computed(() => {
  return localState.currentList === availableList.simpleList
      ? setCurrentListToFavorite
      : setCurrentListToSimple
})

const buttonText = computed(() => {
  return buttonSwitcherListText[localState.currentList]
})
</script>

<template>
  <div class="flex justify-center">
    <TheButton
      :text="buttonText"
      class="mt-4"
      @click="switcherFunction"
    />
  </div>
  <div class="flex flex-wrap items-center justify-center">
    <PokemonCard 
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
      v-bind="pokemon"
    />
  </div>
</template>
