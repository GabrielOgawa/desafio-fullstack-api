import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsActiveColumn1679439740504 implements MigrationInterface {
    name = 'AddIsActiveColumn1679439740504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
    }

}
