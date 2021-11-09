import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class PictureMigration1636468196913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "picture",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                    },
                    {
                        name: "large",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "medium",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "thumbnail",
                        type: "varchar",
                        isNullable: true,
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("picture");
    }

}
