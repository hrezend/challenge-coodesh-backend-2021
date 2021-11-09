import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class RegisteredMigration1636468168840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "registered",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "age",
                        type: "integer",
                        isNullable: true,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("registered");
    }

}
