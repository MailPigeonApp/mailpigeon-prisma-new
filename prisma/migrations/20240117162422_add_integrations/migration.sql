-- CreateTable
CREATE TABLE "integrations" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "projectId" UUID NOT NULL,

    CONSTRAINT "integrations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "integrations" ADD CONSTRAINT "integrations_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
