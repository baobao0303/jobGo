-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "CadidateProfile" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "phone" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "openWork" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CadidateProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CadidateProfile_userId_key" ON "CadidateProfile"("userId");

-- AddForeignKey
ALTER TABLE "CadidateProfile" ADD CONSTRAINT "CadidateProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
