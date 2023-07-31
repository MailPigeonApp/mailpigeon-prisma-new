/*
  Warnings:

  - The `key` column on the `apikey` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `isFavorite` on the `submission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "apikey" DROP COLUMN "key",
ADD COLUMN     "key" UUID NOT NULL DEFAULT uuid_generate_v4();

-- AlterTable
ALTER TABLE "submission" DROP COLUMN "isFavorite",
ADD COLUMN     "favorite" BOOLEAN DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "apikey_key_key" ON "apikey"("key");
