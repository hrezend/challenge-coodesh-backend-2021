import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ImportedIdMigration1636468153219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "importedId",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "value",
                        type: "varchar",
                        isNullable: true,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("importedId");
    }

}
