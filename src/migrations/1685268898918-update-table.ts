import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTable1685268898918 implements MigrationInterface {
    name = 'UpdateTable1685268898918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "name" TO "title"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`);
    }

}
