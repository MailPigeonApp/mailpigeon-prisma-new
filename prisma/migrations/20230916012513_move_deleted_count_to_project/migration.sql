/*
  Warnings:

  - You are about to drop the column `deletedCount` on the `submission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "deletedCount" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "submission" DROP COLUMN "deletedCount";
