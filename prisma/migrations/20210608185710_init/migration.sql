/*
  Warnings:

  - Added the required column `city` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" INTEGER NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "zipCode" INTEGER NOT NULL;
