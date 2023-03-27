/*
  Warnings:

  - You are about to drop the column `opentingTimeFriday` on the `OfficeHour2` table. All the data in the column will be lost.
  - You are about to drop the column `opentingTimeMonday` on the `OfficeHour2` table. All the data in the column will be lost.
  - You are about to drop the column `opentingTimeSaturday` on the `OfficeHour2` table. All the data in the column will be lost.
  - You are about to drop the column `opentingTimeSunday` on the `OfficeHour2` table. All the data in the column will be lost.
  - You are about to drop the column `opentingTimeThursday` on the `OfficeHour2` table. All the data in the column will be lost.
  - You are about to drop the column `opentingTimeTuesday` on the `OfficeHour2` table. All the data in the column will be lost.
  - You are about to drop the column `opentingTimeWednesday` on the `OfficeHour2` table. All the data in the column will be lost.
  - Added the required column `openingTimeFriday` to the `OfficeHour2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTimeMonday` to the `OfficeHour2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTimeSaturday` to the `OfficeHour2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTimeSunday` to the `OfficeHour2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTimeThursday` to the `OfficeHour2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTimeTuesday` to the `OfficeHour2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTimeWednesday` to the `OfficeHour2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OfficeHour2" DROP COLUMN "opentingTimeFriday",
DROP COLUMN "opentingTimeMonday",
DROP COLUMN "opentingTimeSaturday",
DROP COLUMN "opentingTimeSunday",
DROP COLUMN "opentingTimeThursday",
DROP COLUMN "opentingTimeTuesday",
DROP COLUMN "opentingTimeWednesday",
ADD COLUMN     "openingTimeFriday" INTEGER NOT NULL,
ADD COLUMN     "openingTimeMonday" INTEGER NOT NULL,
ADD COLUMN     "openingTimeSaturday" INTEGER NOT NULL,
ADD COLUMN     "openingTimeSunday" INTEGER NOT NULL,
ADD COLUMN     "openingTimeThursday" INTEGER NOT NULL,
ADD COLUMN     "openingTimeTuesday" INTEGER NOT NULL,
ADD COLUMN     "openingTimeWednesday" INTEGER NOT NULL;
