/*
  Warnings:

  - You are about to drop the column `deletedCount` on the `project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "project" DROP COLUMN "deletedCount",
ADD COLUMN     "deleted_count" INTEGER DEFAULT 0,
ADD COLUMN     "has_completed_walkthrough" BOOLEAN DEFAULT false;
