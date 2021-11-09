import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class LoginMigration1636468175197 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "login",
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
        await queryRunner.dropTable("login");
    }

}
