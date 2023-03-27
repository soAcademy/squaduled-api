-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_officerId_key";

-- DropIndex
DROP INDEX "User_phone_key";

-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "OfficeHour1" ALTER COLUMN "openTime" SET DATA TYPE TEXT,
ALTER COLUMN "closeTime" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "OfficeHour2" ALTER COLUMN "closingTimeMonday" SET DATA TYPE TEXT,
ALTER COLUMN "closingTimeTuesday" SET DATA TYPE TEXT,
ALTER COLUMN "closingTimeWednesday" SET DATA TYPE TEXT,
ALTER COLUMN "closingTimeThursday" SET DATA TYPE TEXT,
ALTER COLUMN "closingTimeFriday" SET DATA TYPE TEXT,
ALTER COLUMN "closingTimeSaturday" SET DATA TYPE TEXT,
ALTER COLUMN "closingTimeSunday" SET DATA TYPE TEXT,
ALTER COLUMN "openingTimeFriday" SET DATA TYPE TEXT,
ALTER COLUMN "openingTimeMonday" SET DATA TYPE TEXT,
ALTER COLUMN "openingTimeSaturday" SET DATA TYPE TEXT,
ALTER COLUMN "openingTimeSunday" SET DATA TYPE TEXT,
ALTER COLUMN "openingTimeThursday" SET DATA TYPE TEXT,
ALTER COLUMN "openingTimeTuesday" SET DATA TYPE TEXT,
ALTER COLUMN "openingTimeWednesday" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "officerId" SET DATA TYPE TEXT;
