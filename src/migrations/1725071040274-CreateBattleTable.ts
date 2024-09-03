import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBattleTable1725071040274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE battle (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             winner INTEGER NOT NULL,
             loser INTEGER NOT NULL,
             rounds INTEGER NOT NULL,
             FOREIGN KEY (winner) REFERENCES pokemon(id),
             FOREIGN KEY (loser) REFERENCES pokemon(id)
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS table;`);
    }

}
