import { defineStore } from 'pinia'

import { getPokemonList } from '../service/API'

export const pokemonsStore = defineStore('pokemons', {
  state: () => {
    return {
      pokemonsList: [],
      favoritePokemons: [],
    }
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
