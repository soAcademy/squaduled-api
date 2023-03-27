/*
  Warnings:

  - You are about to drop the column `roll` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[day]` on the table `OfficeHour1` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "roll",
ADD COLUMN     "role" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OfficeHour1_day_key" ON "OfficeHour1"("day");
