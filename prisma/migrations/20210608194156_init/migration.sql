/*
  Warnings:

  - Added the required column `phoneNumber` to the `apply` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "apply" ADD COLUMN     "phoneNumber" INTEGER NOT NULL;
