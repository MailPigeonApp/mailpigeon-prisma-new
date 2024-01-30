-- CreateEnum
CREATE TYPE "INTEGRATIONS" AS ENUM ('telegram');

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "activeIntegrations" "INTEGRATIONS"[];
