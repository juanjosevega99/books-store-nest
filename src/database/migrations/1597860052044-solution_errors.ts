import {MigrationInterface, QueryRunner} from "typeorm";

export class solutionErrors1597860052044 implements MigrationInterface {
    name = 'solutionErrors1597860052044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_books" DROP CONSTRAINT "FK_daa39d872eb7e189a1fea05be7c"`);
        await queryRunner.query(`DROP INDEX "IDX_daa39d872eb7e189a1fea05be7"`);
        await queryRunner.query(`ALTER TABLE "user_books" RENAME COLUMN "bookId" TO "booksId"`);
        await queryRunner.query(`ALTER TABLE "user_books" RENAME CONSTRAINT "PK_847058169e1dd0962e01c191e76" TO "PK_961956f2dfd99f08f8053cf4950"`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "name" character varying(100), "description" character varying(500) NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_feb9d8083aefec5c5cc9208263" ON "user_books" ("booksId") `);
        await queryRunner.query(`ALTER TABLE "user_books" ADD CONSTRAINT "FK_feb9d8083aefec5c5cc9208263c" FOREIGN KEY ("booksId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_books" DROP CONSTRAINT "FK_feb9d8083aefec5c5cc9208263c"`);
        await queryRunner.query(`DROP INDEX "IDX_feb9d8083aefec5c5cc9208263"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`ALTER TABLE "user_books" RENAME CONSTRAINT "PK_961956f2dfd99f08f8053cf4950" TO "PK_847058169e1dd0962e01c191e76"`);
        await queryRunner.query(`ALTER TABLE "user_books" RENAME COLUMN "booksId" TO "bookId"`);
        await queryRunner.query(`CREATE INDEX "IDX_daa39d872eb7e189a1fea05be7" ON "user_books" ("bookId") `);
        await queryRunner.query(`ALTER TABLE "user_books" ADD CONSTRAINT "FK_daa39d872eb7e189a1fea05be7c" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
