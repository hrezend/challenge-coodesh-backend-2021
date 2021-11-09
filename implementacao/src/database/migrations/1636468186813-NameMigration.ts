import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class NameMigration1636468186813 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "name",
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
                        name: "title",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "first",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "last",
                        type: "varchar",
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
        await queryRunner.dropTable("name");
    }

}
