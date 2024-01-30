/*
  Warnings:

  - Added the required column `userId` to the `integrations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "integrations" ADD COLUMN     "userId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "integrations" ADD CONSTRAINT "integrations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
