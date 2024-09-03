import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Pokemon} from "../pokemons/pokemon.entity";

@Entity()
export class Battle {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pokemon)
    winner: Pokemon;

    @ManyToOne(() => Pokemon)
    loser: Pokemon;

    @Column()
    rounds: number;
}
