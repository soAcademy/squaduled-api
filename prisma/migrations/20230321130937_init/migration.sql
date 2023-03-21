/*
  Warnings:

  - You are about to drop the `_FacilityToRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FacilityToRoom" DROP CONSTRAINT "_FacilityToRoom_A_fkey";

-- DropForeignKey
ALTER TABLE "_FacilityToRoom" DROP CONSTRAINT "_FacilityToRoom_B_fkey";

-- DropTable
DROP TABLE "_FacilityToRoom";

-- CreateTable
CREATE TABLE "roomToFacility" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "facilityId" INTEGER NOT NULL,

    CONSTRAINT "roomToFacility_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "roomToFacility" ADD CONSTRAINT "roomToFacility_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roomToFacility" ADD CONSTRAINT "roomToFacility_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
