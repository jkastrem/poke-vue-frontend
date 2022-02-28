<script setup>
import { computed, reactive, ref } from 'vue'
import { pokemonsStore as usePokemonsStore } from './store/pokemons'

import TheButton from './components/common/TheButton.vue'
import PokemonCard from './components/PokemonCard.vue'

const pokemonsStore = usePokemonsStore()

const availableList = ref({
  simpleList: 'simpleList',
  favoriteList: 'favoriteList',
})

const localState = reactive({
  currentList: availableList.value.simpleList,
})

function setCurrentListToFavorite() {
  localState.currentList = availableList.value.favoriteList
}

function setCurrentListToSimple() {
  localState.currentList = availableList.value.simpleList
}

const setterCurrentListFunction = new Map()
setterCurrentListFunction.set(availableList.value.simpleList, setCurrentListToFavorite)
setterCurrentListFunction.set(availableList.value.favoriteList, setCurrentListToSimple)

const buttonSwitcherListText = new Map()
buttonSwitcherListText.set(availableList.value.simpleList, 'Go to favorites')
buttonSwitcherListText.set(availableList.value.favoriteList, 'Go to simple list')

const switchSetterCurrentList = computed(() => {
  return setterCurrentListFunction.get(localState.currentList)
})
const switcherCurrentListText = computed(() => {
  return buttonSwitcherListText.get(localState.currentList)
})

pokemonsStore.refreshPokemonList()
</script>

<template>
  <div class="flex justify-center">
    <TheButton
      :text="switcherCurrentListText"
      class="mt-4"
      @click="switchSetterCurrentList()"
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
