import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1636468207935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "nat",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "gender",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "cell",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "status",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "imported_t",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("user");
    }

}
