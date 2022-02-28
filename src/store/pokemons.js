import { defineStore } from 'pinia'

import { getPokemonList } from '../service/API'

export const pokemonsStore = defineStore('pokemons', {
  state: () => {
    return {
      pokemonsList: [],
      favoritePokemons: [],
    }
  },
  getters: {
    favoriteListIds() {
      const ids = []
      for (const pokemon of this.favoritePokemons) {
        ids.push(pokemon.id)
      }
      return Array.from(new Set(ids))
    },
  },
  actions: {
    async refreshPokemonList() {
      this.pokemonsList = await getPokemonList()
    },
    addPokemonToFavoriteList(id) {
      const [ favoritePokemon ] = this.pokemonsList.filter((pokemon) => pokemon.id === id)
      this.favoritePokemons.push(favoritePokemon)
    },
  },
})
