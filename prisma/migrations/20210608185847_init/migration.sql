/*
  Warnings:

  - Added the required column `city` to the `apply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eduction` to the `apply` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipeCode` to the `apply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apply" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "eduction" TEXT NOT NULL,
ADD COLUMN     "zipeCode" TEXT NOT NULL;
