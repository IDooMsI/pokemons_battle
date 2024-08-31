import { DataSource } from 'typeorm';
import { Pokemon } from './pokemons/pokemon.entity';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'test.db',
    entities: [Pokemon],
    migrations: ['src/migrations/*.ts'],
    synchronize: true, // Poner en 'true' solo para desarrollo, 'false' en producción
});
