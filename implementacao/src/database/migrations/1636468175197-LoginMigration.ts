import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class LoginMigration1636468175197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "login",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                    },
                    {
                        name: "uuid",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "salt",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "md5",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "sha1",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "sha256",
                        type: "varchar",
                        isNullable: true,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("login");
    }

}
