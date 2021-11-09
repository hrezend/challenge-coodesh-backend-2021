import {MigrationInterface, QueryRunner} from "typeorm";

export class tables1636462874220 implements MigrationInterface {
    name = 'tables1636462874220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "login" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "uuid" varchar, "username" varchar, "password" varchar, "salt" varchar, "md5" varchar, "sha1" varchar, "sha256" varchar)`);
        await queryRunner.query(`CREATE TABLE "name" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar, "first" varchar, "last" varchar)`);
        await queryRunner.query(`CREATE TABLE "registered" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" datetime, "age" integer)`);
        await queryRunner.query(`CREATE TABLE "id" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "value" varchar)`);
        await queryRunner.query(`CREATE TABLE "picture" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "thumbnail" varchar, "medium" varchar, "large" varchar)`);
        await queryRunner.query(`CREATE TABLE "location" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "number" integer, "street" varchar, "city" varchar, "state" varchar, "country" varchar, "postcode" varchar, "latitude" varchar, "longitude" varchar, "offset" varchar, "description" varchar)`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "gender" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "cell" varchar NOT NULL, "nat" varchar NOT NULL, "imported_t" datetime NOT NULL DEFAULT (datetime('now')), "status" varchar NOT NULL DEFAULT ('PUBLISHED'), "idId" integer, "nameId" integer, "locationId" integer, "loginId" integer, "dobId" integer, "registeredId" integer, "pictureId" integer, CONSTRAINT "REL_35975e959a8c70872f8c4ced97" UNIQUE ("idId"), CONSTRAINT "REL_1db0f40d9ff5904789eb33dc03" UNIQUE ("nameId"), CONSTRAINT "REL_93e37a8413a5745a9b52bc3c0c" UNIQUE ("locationId"), CONSTRAINT "REL_f085de3b9289b5f6b7528ebe16" UNIQUE ("loginId"), CONSTRAINT "REL_8d431f39f73f0a5dabd339326e" UNIQUE ("dobId"), CONSTRAINT "REL_487e55b379298eba4c769786ca" UNIQUE ("registeredId"), CONSTRAINT "REL_7478a15985dbfa32ed5fc77a7a" UNIQUE ("pictureId"))`);
        await queryRunner.query(`CREATE TABLE "dob" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" datetime, "age" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("userId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "gender" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "cell" varchar NOT NULL, "nat" varchar NOT NULL, "imported_t" datetime NOT NULL DEFAULT (datetime('now')), "status" varchar NOT NULL DEFAULT ('PUBLISHED'), "idId" integer, "nameId" integer, "locationId" integer, "loginId" integer, "dobId" integer, "registeredId" integer, "pictureId" integer, CONSTRAINT "REL_35975e959a8c70872f8c4ced97" UNIQUE ("idId"), CONSTRAINT "REL_1db0f40d9ff5904789eb33dc03" UNIQUE ("nameId"), CONSTRAINT "REL_93e37a8413a5745a9b52bc3c0c" UNIQUE ("locationId"), CONSTRAINT "REL_f085de3b9289b5f6b7528ebe16" UNIQUE ("loginId"), CONSTRAINT "REL_8d431f39f73f0a5dabd339326e" UNIQUE ("dobId"), CONSTRAINT "REL_487e55b379298eba4c769786ca" UNIQUE ("registeredId"), CONSTRAINT "REL_7478a15985dbfa32ed5fc77a7a" UNIQUE ("pictureId"), CONSTRAINT "FK_35975e959a8c70872f8c4ced97a" FOREIGN KEY ("idId") REFERENCES "id" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_1db0f40d9ff5904789eb33dc031" FOREIGN KEY ("nameId") REFERENCES "name" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_93e37a8413a5745a9b52bc3c0c1" FOREIGN KEY ("locationId") REFERENCES "location" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_f085de3b9289b5f6b7528ebe16e" FOREIGN KEY ("loginId") REFERENCES "login" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_8d431f39f73f0a5dabd339326e8" FOREIGN KEY ("dobId") REFERENCES "dob" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_487e55b379298eba4c769786ca3" FOREIGN KEY ("registeredId") REFERENCES "registered" ("id") ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT "FK_7478a15985dbfa32ed5fc77a7a1" FOREIGN KEY ("pictureId") REFERENCES "picture" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId") SELECT "userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "gender" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "cell" varchar NOT NULL, "nat" varchar NOT NULL, "imported_t" datetime NOT NULL DEFAULT (datetime('now')), "status" varchar NOT NULL DEFAULT ('PUBLISHED'), "idId" integer, "nameId" integer, "locationId" integer, "loginId" integer, "dobId" integer, "registeredId" integer, "pictureId" integer, CONSTRAINT "REL_35975e959a8c70872f8c4ced97" UNIQUE ("idId"), CONSTRAINT "REL_1db0f40d9ff5904789eb33dc03" UNIQUE ("nameId"), CONSTRAINT "REL_93e37a8413a5745a9b52bc3c0c" UNIQUE ("locationId"), CONSTRAINT "REL_f085de3b9289b5f6b7528ebe16" UNIQUE ("loginId"), CONSTRAINT "REL_8d431f39f73f0a5dabd339326e" UNIQUE ("dobId"), CONSTRAINT "REL_487e55b379298eba4c769786ca" UNIQUE ("registeredId"), CONSTRAINT "REL_7478a15985dbfa32ed5fc77a7a" UNIQUE ("pictureId"))`);
        await queryRunner.query(`INSERT INTO "user"("userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId") SELECT "userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`DROP TABLE "dob"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "picture"`);
        await queryRunner.query(`DROP TABLE "id"`);
        await queryRunner.query(`DROP TABLE "registered"`);
        await queryRunner.query(`DROP TABLE "name"`);
        await queryRunner.query(`DROP TABLE "login"`);
    }

}
