/*
  Warnings:

  - You are about to drop the column `has_completed_walkthrough` on the `project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "project" DROP COLUMN "has_completed_walkthrough";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "has_completed_walkthrough" BOOLEAN DEFAULT false;
