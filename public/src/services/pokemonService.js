export const opponentSelectService = (pokemons) => {
    const countPokemon = pokemons.length;
    return Math.floor(Math.random() * (countPokemon - 1 + 1));
}

export const pokemonRequestHelper = (pokemon) => {
    return {
        id: pokemon.id,
        name: pokemon.name,
        attack: pokemon.attack,
        defense: pokemon.defense,
        hp: pokemon.hp,
        speed: pokemon.speed,
        type: pokemon.type,
        weaknesses: pokemon.weaknesses
    }
}