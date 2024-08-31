import { Controller, Get } from '@nestjs/common';
import {PokemonsService} from "./pokemons.service";

@Controller()
export class PokemonsController {
    constructor(private readonly pokemonsService: PokemonsService) {}

    // @Get()
    // getHello(): string {
    //     return this.pokemonsService.getHello();
    // }
}