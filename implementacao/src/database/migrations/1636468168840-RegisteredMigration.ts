import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class RegisteredMigration1636468168840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "registered",
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
                        name: "date",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "age",
                        type: "integer",
                        isNullable: true,
                    },
                    {
                        name: "user_id",
                        type: "integer",
                        isNullable: true,
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_user",
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("registered");
    }

}
