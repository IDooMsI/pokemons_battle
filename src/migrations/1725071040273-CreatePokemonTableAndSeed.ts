import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePokemonTableAndSeed1725071040273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE pokemon (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              attack INTEGER NOT NULL,
              defense INTEGER NOT NULL,
              hp INTEGER NOT NULL,
              speed INTEGER NOT NULL,
              type TEXT NOT NULL,
              weaknesses TEXT,
              imageUrl TEXT NOT NULL
            );
        `)
        await queryRunner.query(
            `
                INSERT INTO pokemon (name, attack, defense, hp, speed, type, weaknesses, imageUrl) VALUES
                   ('Pikachu', 4, 3, 3, 6, 'Electric', 'Ground', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
                   ('Charmander', 4, 3, 3, 4, 'Fire', 'Water,Rock', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
                   ('Squirtle', 3, 4, 3, 3, 'Water', 'Electric,Grass', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
                   ('Bulbasur', 4, 3, 3, 3, 'Grass', 'Fire,Ice', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
                   ('Eevee', 4, 3, 4, 5, 'Normal', 'Fighting', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png');
            `,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS pokemon;`);
    }

}
