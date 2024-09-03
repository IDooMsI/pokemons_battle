import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './battle.entity';

@Injectable()
export class BattleService {
    constructor(
        @InjectRepository(Battle)
        private battleRepository: Repository<Battle>,
    ) {}

    async createBattle(winner, loser, rounds): Promise<Battle> {
        const battle = this.battleRepository.create({ winner, loser, rounds });
        return this.battleRepository.save(battle);
    }
}
