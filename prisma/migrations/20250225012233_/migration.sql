/*
  Warnings:

  - You are about to drop the column `favorite` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `targetId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `targetType` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `favorite` on the `Product` table. All the data in the column will be lost.
  - Added the required column `username` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `articleId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "favorite",
ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "targetId",
DROP COLUMN "targetType",
ADD COLUMN     "articleId" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "favorite",
ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "username" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TargetType";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
