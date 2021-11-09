import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class DobMigration1636468161468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "dob",
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
        await queryRunner.dropTable("dob");
    }

}
