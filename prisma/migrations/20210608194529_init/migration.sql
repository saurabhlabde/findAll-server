/*
  Warnings:

  - Changed the type of `zipCode` on the `apply` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "apply" DROP COLUMN "zipCode",
ADD COLUMN     "zipCode" INTEGER NOT NULL;
