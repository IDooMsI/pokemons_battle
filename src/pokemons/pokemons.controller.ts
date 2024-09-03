import {Body, Controller, Get, Post} from '@nestjs/common';
import {PokemonsService} from "./pokemons.service";
import {BattleDto} from "../battles/BattleDto";

@Controller()
export class PokemonsController {
    constructor(private readonly pokemonsService: PokemonsService) {}

    // @Post('/turn-decide')
    // turnDecide(@Body() battle: BattleDto): string  {
    //     return this.pokemonsService.decideTurn(battle)
    // }

    @Post('/battle-start')
    battleStart(@Body() battle: BattleDto): Promise<string>  {
        return this.pokemonsService.battleStart(battle)
    }
}