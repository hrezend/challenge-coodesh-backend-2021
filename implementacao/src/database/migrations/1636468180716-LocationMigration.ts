import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class LocationMigration1636468180716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "location",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
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
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("location");
    }

}
