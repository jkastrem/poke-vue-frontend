import { defineStore } from 'pinia'
import { removeObjectFromArrayByKey } from '../helpers/object'
import { listNaming } from '../helpers/consts'
import { sortArrayByField } from '../helpers/array'

import { getPokemonList } from '../service/API'

export const pokemonsStore = defineStore('pokemons', {
  state: () => {
    return {
      [listNaming.simple]: [],
      [listNaming.favorite]: [],
    }
  },
  getters: {
    favoriteListIds() {
      const ids = []
      for (const pokemon of this[listNaming.favorite]) {
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
    removePokemon(id, list) {
      this[list] = removeObjectFromArrayByKey(id, 'id' ,this[list])
    },
    sortPokemons(direction) {
      this[listNaming.simple] = sortArrayByField(
        this[listNaming.simple],
        'height',
        direction,
      )
    },
  },
})
