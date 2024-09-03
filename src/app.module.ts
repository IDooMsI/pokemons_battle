import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from "./pokemons/pokemon.entity";
import { PokemonsService } from "./pokemons/pokemons.service";
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppDataSource } from "./data-source";
import { join } from 'path';
import {PokemonsController} from "./pokemons/pokemons.controller";
import {BattleService} from "./battles/battle.service";
import {Battle} from "./battles/battle.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forFeature([Pokemon, Battle]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, PokemonsController],
  providers: [AppService, PokemonsService, BattleService],
  exports: [BattleService],
})
export class AppModule {}
