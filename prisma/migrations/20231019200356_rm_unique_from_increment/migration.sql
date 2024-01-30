-- DropIndex
DROP INDEX "submission_projectId_increment_key";

-- AlterTable
ALTER TABLE "submission" ALTER COLUMN "increment" SET DEFAULT 0,
ALTER COLUMN "increment" DROP DEFAULT;
DROP SEQUENCE "submission_increment_seq";
