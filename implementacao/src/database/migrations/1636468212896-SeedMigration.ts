import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedMigration1636468212896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO importedId (name, value) VALUES ('FRC', '342830-2')");
        await queryRunner.query("INSERT INTO dob (date, age) VALUES ('1974-05-05T20:18:55.864Z', 47)");
        await queryRunner.query("INSERT INTO registered (date, age) VALUES ('2016-02-01T01:28:37.106Z', 5)");
        await queryRunner.query("INSERT INTO name (title, first, last) VALUES ('Mr.', 'Hérson', 'Rezende')");
        await queryRunner.query("INSERT INTO picture (large, medium, thumbnail) VALUES ('https://randomuser.me/api/portraits/men/48.jpg', 'https://randomuser.me/api/portraits/med/men/48.jpg', 'https://randomuser.me/api/portraits/thumb/men/48.jpg')");
        await queryRunner.query("INSERT INTO location (number, street, city, state, country, postcode, latitude, longitude, offset, description) VALUES (30, 'Rua Amazonas', 'Muritiba', 'Bahia', 'Brasil', '44340-000', '-30.0456', '-31.4566', '-3:00', 'Brasilia, Brasil')");
        await queryRunner.query("INSERT INTO login (uuid, username, password, salt, md5, sha1, sha256) VALUES ('cdbd32dd-5a3b-4945-a2ae-08c759f7a573', 'hrezend', '12345', 'wOlRMqtz', 'a5db4e47023ca3ddd1feeb5926d25008', 'c34ac8617c630e21b23af8243475138de077a583', '136366fa2caaa3c63229128f8ecfc4a87f6dbbd2d3702e3c577f4285c08f0dd9')");
        await queryRunner.query("INSERT INTO user (id, gender, email, phone, cell, nat, imported_t, status, importedId_id, name_id, location_id, login_id, dob_id, registered_id, picture_id)VALUES(1, 'male', 'herson.reis@ufba.br', '75998878594', '75998878594', 'BR', '2021-11-09', 'PUBLISHED', 1, 1, 1, 1, 1, 1, 1)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM importedId WHERE id = '1'");
        await queryRunner.query("DELETE FROM dob WHERE id = '1'");
        await queryRunner.query("DELETE FROM registered WHERE id = '1'");
        await queryRunner.query("DELETE FROM name WHERE id = '1'");
        await queryRunner.query("DELETE FROM picture WHERE id = '1'");
        await queryRunner.query("DELETE FROM location WHERE id = '1'");
        await queryRunner.query("DELETE FROM login WHERE id = '1'");
        await queryRunner.query("DELETE FROM user WHERE id = '1'");
    }

}
