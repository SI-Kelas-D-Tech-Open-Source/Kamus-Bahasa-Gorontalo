-- CreateTable
CREATE TABLE "Language" (
    "indonesia" TEXT NOT NULL,
    "gorontalo" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sound" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("indonesia")
);
