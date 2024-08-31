import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { DataSource, Repository } from "typeorm";

@Injectable()
@Dependencies(getRepositoryToken(Pokemon))
export class PokemonsService {
    constructor(@InjectRepository(Pokemon) private pokemonsRepository: Repository<Pokemon>, private dataSource: DataSource) {}

    findAll(): Promise<Pokemon[]> {
        return this.pokemonsRepository.find();
    }

    findOne(id: number): Promise<Pokemon | null> {
        return this.pokemonsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.pokemonsRepository.delete(id);
    }
}