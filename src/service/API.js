import { capitalizeFirstLetter } from '../helpers/string'

export async function getPokemonList(count = 15) {
  const initialResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)

  let listOfUrls = []
  if (initialResponse.ok) {
    const pokemonsResponse = await initialResponse.json()
    listOfUrls = pokemonsResponse.results
  } else {
    console.error(`Error: ${initialResponse.status}`)
  }

  const pokemonsList = []

  for (const pokemon of listOfUrls) {
    const response = await fetch(pokemon.url)
    if (response.ok) {
      const information = await response.json()
      pokemonsList.push({
        name: capitalizeFirstLetter(information.name),
        height: information.height,
        weight: information.weight,
        image: information.sprites.front_default,
      })
    }
  }

  return pokemonsList
}
