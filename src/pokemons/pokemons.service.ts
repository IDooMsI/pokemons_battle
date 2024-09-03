import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { Repository } from "typeorm";
import {BattleService} from "../battles/battle.service";
import {Battle} from "../battles/battle.entity";

@Injectable()
@Dependencies(getRepositoryToken(Pokemon))
export class PokemonsService {
    constructor(
        @InjectRepository(Pokemon) private pokemonsRepository: Repository<Pokemon>,
        @InjectRepository(Battle) private battleRepository: Repository<Battle>,
        private readonly battleService: BattleService
    ) {}

    findAll(): Promise<Pokemon[]> {
        return this.pokemonsRepository.find();
    }

    decideTurn(battle) {
        if (battle.selectedPokemon.speed === battle.selectedOpponent.speed){
            battle.selectedPokemon.attack > battle.selectedOpponent.attack ?
                battle.selectedPokemon.turn = true : battle.selectedOpponent.turn = true
        }

        battle.selectedPokemon.speed > battle.selectedOpponent.speed
            ? battle.selectedPokemon.turn = true : battle.selectedOpponent.turn = true

        return battle;
    }

    async battleStart(battle) {
        battle = this.decideTurn(battle);
        let battleContinue = true;
        const pokemon1 = battle.selectedPokemon;
        const pokemon2 = battle.selectedOpponent;
        let rounds = 0;
        while (battleContinue){
            if (pokemon1.turn){
                this.attackTurn(pokemon1, pokemon2);
            }else{
                this.attackTurn(pokemon2, pokemon1);
            }

            if (pokemon1.hp === 0 || pokemon2.hp === 0){
                battleContinue = false;
            }
            rounds ++;

        }
        return await this.defineWinner(pokemon1, pokemon2, rounds);
    }

    async defineWinner(pokemon1, pokemon2, rounds){
        if (pokemon1.hp === 0){
            await this.persistBattleData(pokemon2, pokemon1, rounds);
            return pokemon2;

        }else{
            await this.persistBattleData(pokemon1, pokemon2, rounds)
            return pokemon1;
        }
    }

    async persistBattleData(winner, loser, rounds){
        const winnerPokemon = await this.pokemonsRepository.findOneBy({id: winner.id});
        const loserPokemon = await this.pokemonsRepository.findOneBy({id: loser.id});
        const battle = this.battleRepository.create({winner: winnerPokemon, loser:loserPokemon, rounds: rounds} )
        await this.battleRepository.save(battle);
    }

    attackTurn(pokemonTurn, otherPokemon){
        pokemonTurn.attack <= otherPokemon.defense ? pokemonTurn.attack = 1 : pokemonTurn.attack = pokemonTurn.attack - otherPokemon.defense;
        otherPokemon.weaknesses.includes(pokemonTurn.type) ? pokemonTurn.attack + 1 : pokemonTurn.attack;
        otherPokemon.hp = otherPokemon.hp - pokemonTurn.attack;
        otherPokemon.turn = true;
        pokemonTurn.turn = false;
    }
}