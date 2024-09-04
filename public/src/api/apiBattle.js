import axios from 'axios';
import {pokemonRequestHelper} from "../services/pokemonService";

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const battleStart = (pokemonSelected, pokemonOpponent, setPokemonTurn, setFinish) => {
    apiClient.post('/battle-start', {
        selectedPokemon: pokemonRequestHelper(pokemonSelected),
        selectedOpponent: pokemonRequestHelper(pokemonOpponent)
    })
    .then(response => {
        console.log("aca hay algo?")

        setPokemonTurn(response.data);
        setFinish(true);
    })
    .catch(error => console.error("error al obtener los pokemon: ", error))
}