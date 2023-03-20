/*
  Warnings:

  - Changed the type of `capacityMax` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `officerId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "capacityMax",
ADD COLUMN     "capacityMax" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "officerId",
ADD COLUMN     "officerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_officerId_key" ON "User"("officerId");
