import { PrismaClient } from "@prisma/client";
import { PRODUCTS } from "./mock.js";
import { ARTICLES } from "./mock.js";
import { COMMENTS } from "./mock.js";

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  await prisma.product.deleteMany();
  await prisma.article.deleteMany();
  await prisma.comment.deleteMany();

  // 목 데이터 삽입
  await prisma.product.createMany({
    data: PRODUCTS,
    skipDuplicates: true,
  });

  const createdArticles = await Promise.all(
    ARTICLES.map((article) =>
      prisma.article.create({
        data: article,
      })
    )
  );

  await Promise.all(
    COMMENTS.map(async (comment) => {
      await prisma.comment.create({
        data: {
          content: comment.content,
          username: comment.username,
          articleRef: {
            connect: {
              id: createdArticles[comment.articleId - 1].id,
            },
          },
        },
      });
    })
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
