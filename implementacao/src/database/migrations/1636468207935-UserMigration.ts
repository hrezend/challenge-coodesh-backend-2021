import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1636468207935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "interger",
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
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
                    {
                        name: "importedId_id",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "name_id",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "login_id",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "location_id",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "picture_id",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "dob_id",
                        type: "interger",
                        isNullable: true,
                    },
                    {
                        name: "registered_id",
                        type: "interger",
                        isNullable: true,
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_registered",
                        referencedTableName: "registered",
                        referencedColumnNames: ["id"],
                        columnNames: ["registered_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_dob",
                        referencedTableName: "dob",
                        referencedColumnNames: ["id"],
                        columnNames: ["dob_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_picture",
                        referencedTableName: "picture",
                        referencedColumnNames: ["id"],
                        columnNames: ["picture_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_login",
                        referencedTableName: "login",
                        referencedColumnNames: ["id"],
                        columnNames: ["login_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_location",
                        referencedTableName: "location",
                        referencedColumnNames: ["id"],
                        columnNames: ["location_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_name",
                        referencedTableName: "name",
                        referencedColumnNames: ["id"],
                        columnNames: ["name_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                    {
                        name: "fk_importedId",
                        referencedTableName: "importedId",
                        referencedColumnNames: ["id"],
                        columnNames: ["importedId_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void>{
        await queryRunner.dropTable("user");
    }

}
