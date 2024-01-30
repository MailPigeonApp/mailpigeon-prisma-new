/*
  Warnings:

  - You are about to drop the column `activeIntegrations` on the `project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "project" DROP COLUMN "activeIntegrations",
ADD COLUMN     "active_integrations" "INTEGRATIONS"[];
