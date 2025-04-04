-- CreateTable
CREATE TABLE "reminder" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date_to_remind" TIMESTAMP(3) NOT NULL,
    "early_reminder" INTEGER DEFAULT 0,
    "repeat_on" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reminder_pkey" PRIMARY KEY ("id")
);
