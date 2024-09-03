import {PokemonDto} from "../pokemons/PokemonDto";
import {Pokemon} from "../pokemons/pokemon.entity";

export class BattleDto {
  selectedPokemon: PokemonDto;
  selectedOpponent: PokemonDto;
  winner: Pokemon
}