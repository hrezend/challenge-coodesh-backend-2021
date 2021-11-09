import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedMigration1636468212896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO user (gender, email, phone, cell, nat, imported_t, status)VALUES('male', 'herson.reis@ufba.br', '75998878594', '75998878594', 'BR', '2021-11-09', 'PUBLISHED')");
        await queryRunner.query("INSERT INTO importedId (name, value, user_id) VALUES ('FRC', '342830-2', 1)");
        await queryRunner.query("INSERT INTO dob (date, age, user_id) VALUES ('1974-05-05T20:18:55.864Z', 47, 1)");
        await queryRunner.query("INSERT INTO registered (date, age, user_id) VALUES ('2016-02-01T01:28:37.106Z', 5, 1)");
        await queryRunner.query("INSERT INTO name (title, first, last, user_id) VALUES ('Mr.', 'Hérson', 'Rezende', 1)");
        await queryRunner.query("INSERT INTO picture (large, medium, thumbnail, user_id) VALUES ('https://randomuser.me/api/portraits/men/48.jpg', 'https://randomuser.me/api/portraits/med/men/48.jpg', 'https://randomuser.me/api/portraits/thumb/men/48.jpg', 1)");
        await queryRunner.query("INSERT INTO location (number, street, city, state, country, postcode, latitude, longitude, offset, description, user_id) VALUES (30, 'Rua Amazonas', 'Muritiba', 'Bahia', 'Brasil', '44340-000', '-30.0456', '-31.4566', '-3:00', 'Brasilia, Brasil', 1)");
        await queryRunner.query("INSERT INTO login (uuid, username, password, salt, md5, sha1, sha256, user_id) VALUES ('cdbd32dd-5a3b-4945-a2ae-08c759f7a573', 'hrezend', '12345', 'wOlRMqtz', 'a5db4e47023ca3ddd1feeb5926d25008', 'c34ac8617c630e21b23af8243475138de077a583', '136366fa2caaa3c63229128f8ecfc4a87f6dbbd2d3702e3c577f4285c08f0dd9', 1)");
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
