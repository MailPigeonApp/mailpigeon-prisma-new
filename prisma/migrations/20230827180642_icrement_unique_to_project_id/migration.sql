/*
  Warnings:

  - A unique constraint covering the columns `[projectId,increment]` on the table `submission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "submission_projectId_increment_key" ON "submission"("projectId", "increment");
