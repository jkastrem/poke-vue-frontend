import { defineStore } from 'pinia'
import { removeObjectFromArrayByKey } from '../helpers/object'
import { listNaming } from '../helpers/consts'
import { sortArrayByField, filterArrayByField } from '../helpers/array'

import { getPokemonList } from '../service/API'

export const pokemonsStore = defineStore('pokemons', {
  state: () => {
    return {
      [listNaming.simple]: [],
      [listNaming.favorite]: [],
      [listNaming.apiList]: [],
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
      this[listNaming.apiList] = await getPokemonList()
      this[listNaming.simple] = [...this[listNaming.apiList]]
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
    filterPokemon(from, to) {
      this[listNaming.simple] = filterArrayByField(
        this[listNaming.apiList],
        'height',
        from,
        to,
      )
    },
  },
})
