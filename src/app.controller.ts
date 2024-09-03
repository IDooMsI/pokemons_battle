import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {PokemonsService} from "./pokemons/pokemons.service";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly pokemonService: PokemonsService
  ) {}

  @Get('/')
  getHello() {
    return this.pokemonService.findAll()
  }

}
