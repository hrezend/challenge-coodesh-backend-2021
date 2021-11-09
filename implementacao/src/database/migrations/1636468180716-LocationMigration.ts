import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class LocationMigration1636468180716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "location",
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
                        name: "number",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "street",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "city",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "state",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "country",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "postcode",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "latitude",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "longitude",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "offset",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "description",
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
        await queryRunner.dropTable("location");
    }

}
