import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1636397078998 implements MigrationInterface {
    name = 'teste1636397078998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "coordinates" ("id" varchar PRIMARY KEY NOT NULL, "latitude" varchar NOT NULL, "longitude" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "dob" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, "age" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "id" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "value" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "location" ("id" varchar PRIMARY KEY NOT NULL, "city" varchar NOT NULL, "state" varchar NOT NULL, "country" varchar NOT NULL, "postcode" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "login" ("id" varchar PRIMARY KEY NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "salt" varchar NOT NULL, "md5" varchar NOT NULL, "sha1" varchar NOT NULL, "sha256" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "name" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "first" varchar NOT NULL, "last" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "picture" ("id" varchar PRIMARY KEY NOT NULL, "thumbnail" varchar NOT NULL, "medium" varchar NOT NULL, "large" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "registered" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, "age" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "street" ("id" varchar PRIMARY KEY NOT NULL, "number" integer NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "timezone" ("id" varchar PRIMARY KEY NOT NULL, "offset" varchar NOT NULL, "description" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" varchar PRIMARY KEY NOT NULL, "gender" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "cell" varchar NOT NULL, "nat" varchar NOT NULL, "imported_t" datetime NOT NULL DEFAULT (datetime('now')), "status" varchar NOT NULL DEFAULT ('PUBLISHED'), "idId" varchar, "nameId" varchar, "locationId" varchar, "loginId" varchar, "dobId" varchar, "registeredId" varchar, "pictureId" varchar, CONSTRAINT "REL_35975e959a8c70872f8c4ced97" UNIQUE ("idId"), CONSTRAINT "REL_1db0f40d9ff5904789eb33dc03" UNIQUE ("nameId"), CONSTRAINT "REL_93e37a8413a5745a9b52bc3c0c" UNIQUE ("locationId"), CONSTRAINT "REL_f085de3b9289b5f6b7528ebe16" UNIQUE ("loginId"), CONSTRAINT "REL_8d431f39f73f0a5dabd339326e" UNIQUE ("dobId"), CONSTRAINT "REL_487e55b379298eba4c769786ca" UNIQUE ("registeredId"), CONSTRAINT "REL_7478a15985dbfa32ed5fc77a7a" UNIQUE ("pictureId"))`);
        await queryRunner.query(`CREATE TABLE "temporary_user" ("userId" varchar PRIMARY KEY NOT NULL, "gender" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "cell" varchar NOT NULL, "nat" varchar NOT NULL, "imported_t" datetime NOT NULL DEFAULT (datetime('now')), "status" varchar NOT NULL DEFAULT ('PUBLISHED'), "idId" varchar, "nameId" varchar, "locationId" varchar, "loginId" varchar, "dobId" varchar, "registeredId" varchar, "pictureId" varchar, CONSTRAINT "REL_35975e959a8c70872f8c4ced97" UNIQUE ("idId"), CONSTRAINT "REL_1db0f40d9ff5904789eb33dc03" UNIQUE ("nameId"), CONSTRAINT "REL_93e37a8413a5745a9b52bc3c0c" UNIQUE ("locationId"), CONSTRAINT "REL_f085de3b9289b5f6b7528ebe16" UNIQUE ("loginId"), CONSTRAINT "REL_8d431f39f73f0a5dabd339326e" UNIQUE ("dobId"), CONSTRAINT "REL_487e55b379298eba4c769786ca" UNIQUE ("registeredId"), CONSTRAINT "REL_7478a15985dbfa32ed5fc77a7a" UNIQUE ("pictureId"), CONSTRAINT "FK_35975e959a8c70872f8c4ced97a" FOREIGN KEY ("idId") REFERENCES "id" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_1db0f40d9ff5904789eb33dc031" FOREIGN KEY ("nameId") REFERENCES "name" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_93e37a8413a5745a9b52bc3c0c1" FOREIGN KEY ("locationId") REFERENCES "location" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_f085de3b9289b5f6b7528ebe16e" FOREIGN KEY ("loginId") REFERENCES "login" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_8d431f39f73f0a5dabd339326e8" FOREIGN KEY ("dobId") REFERENCES "dob" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_487e55b379298eba4c769786ca3" FOREIGN KEY ("registeredId") REFERENCES "registered" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_7478a15985dbfa32ed5fc77a7a1" FOREIGN KEY ("pictureId") REFERENCES "picture" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId") SELECT "userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("userId" varchar PRIMARY KEY NOT NULL, "gender" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "cell" varchar NOT NULL, "nat" varchar NOT NULL, "imported_t" datetime NOT NULL DEFAULT (datetime('now')), "status" varchar NOT NULL DEFAULT ('PUBLISHED'), "idId" varchar, "nameId" varchar, "locationId" varchar, "loginId" varchar, "dobId" varchar, "registeredId" varchar, "pictureId" varchar, CONSTRAINT "REL_35975e959a8c70872f8c4ced97" UNIQUE ("idId"), CONSTRAINT "REL_1db0f40d9ff5904789eb33dc03" UNIQUE ("nameId"), CONSTRAINT "REL_93e37a8413a5745a9b52bc3c0c" UNIQUE ("locationId"), CONSTRAINT "REL_f085de3b9289b5f6b7528ebe16" UNIQUE ("loginId"), CONSTRAINT "REL_8d431f39f73f0a5dabd339326e" UNIQUE ("dobId"), CONSTRAINT "REL_487e55b379298eba4c769786ca" UNIQUE ("registeredId"), CONSTRAINT "REL_7478a15985dbfa32ed5fc77a7a" UNIQUE ("pictureId"))`);
        await queryRunner.query(`INSERT INTO "user"("userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId") SELECT "userId", "gender", "email", "phone", "cell", "nat", "imported_t", "status", "idId", "nameId", "locationId", "loginId", "dobId", "registeredId", "pictureId" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "timezone"`);
        await queryRunner.query(`DROP TABLE "street"`);
        await queryRunner.query(`DROP TABLE "registered"`);
        await queryRunner.query(`DROP TABLE "picture"`);
        await queryRunner.query(`DROP TABLE "name"`);
        await queryRunner.query(`DROP TABLE "login"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "id"`);
        await queryRunner.query(`DROP TABLE "dob"`);
        await queryRunner.query(`DROP TABLE "coordinates"`);
    }

}
