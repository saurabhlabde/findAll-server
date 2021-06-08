/*
  Warnings:

  - You are about to drop the column `zipeCode` on the `apply` table. All the data in the column will be lost.
  - Added the required column `zipCode` to the `apply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apply" DROP COLUMN "zipeCode",
ADD COLUMN     "zipCode" TEXT NOT NULL;
