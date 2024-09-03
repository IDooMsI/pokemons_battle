export class PokemonDto {
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    type: string;
    weaknesses: string;
    turn: boolean = false;
}