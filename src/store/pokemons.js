import { defineStore } from 'pinia'

import { getPokemonList } from '../service/API'

export const pokemonsStore = defineStore('pokemons', {
  state: () => {
    return {
      pokemonsList: [],
    }
  },
  actions: {
    async refreshPokemonList() {
      this.pokemonsList = await getPokemonList()
    },
  },
})
