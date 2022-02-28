<script setup>
import { computed, useAttrs } from 'vue'
import { pokemonsStore as usePokemonsStore } from '../store/pokemons'

import TheButton from './common/TheButton.vue'

const pokemonsStore = usePokemonsStore()

const attrs = useAttrs()

defineProps({
  name: {
    type: String,
    required: false,
    default: 'undefined pokemon',
  },
  height: {
    type: Number,
    required: false,
    default: 0,
  },
  weight: {
    type: Number,
    required: false,
    default: 0,
  },
  image: {
    type: String,
    required: false,
    default: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/No_image_available_500_x_500.svg',
  },
})

function addPokemonToFavorite(id) {
  pokemonsStore.addPokemonToFavoriteList(id)
}

const pokemonIsFavorite = computed(() => {
  return pokemonsStore.favoriteListIds.includes(attrs.id)
})
</script>

<template>
  <div class="flex flex-col align-middle lg:flex-row border-2 w-96 max-h-max p-6 mx-8 my-2 rounded-xl hover:shadow-xl items-center space-x-4">
    <img
      :src="image"
      class="w-2/3 h-2/3"
    >
    <div>
      <h2 class="text-xl">
        {{ name }}
      </h2>
      <div class="mt-2">
        <p>Height: <span>{{ height }}</span></p>
        <p>Weight: <span>{{ weight }}</span></p>
      </div>
      <div class="mt-2 flex flex-wrap">
        <TheButton
          text="Add to favorites"
          type="favorite"
          :disabled="pokemonIsFavorite"
          @click="addPokemonToFavorite($attrs.id)"
        />
        <TheButton
          text="Remove"
          type="delete"
        />
      </div>
    </div>
  </div>
</template>
