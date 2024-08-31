import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Pokemon} from "./pokemons/pokemon.entity";
import {PokemonsService} from "./pokemons/pokemons.service";
import {AppDataSource} from "./data-source";

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Pokemon])
  ],
  controllers: [AppController],
  providers: [AppService, PokemonsService],
})
export class AppModule {}
