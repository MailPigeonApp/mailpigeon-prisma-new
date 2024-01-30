/*
  Warnings:

  - The `active_integrations` column on the `project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "project" DROP COLUMN "active_integrations",
ADD COLUMN     "active_integrations" TEXT[] DEFAULT ARRAY[]::TEXT[];
