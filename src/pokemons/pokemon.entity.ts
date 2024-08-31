import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    attack: number;

    @Column()
    defense: number;

    @Column()
    hp: number;

    @Column()
    speed: number;

    @Column()
    type: string;

    @Column('simple-array')
    weaknesses: string[];

    @Column()
    imageUrl: string;
}
