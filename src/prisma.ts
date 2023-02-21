import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const main = async () => {
  const post = await client.post.findFirst({
    where: { title: "Test title" },
    include: { author: true, comments: true, likedBy: true },
  });

  console.log(JSON.stringify(post, null, 2));

  if (post) {
    const newPost = await client.post.update({
      data: { text: "Updated text" },
      where: { id: post.id },
    });

    console.log(JSON.stringify(newPost, null, 2));
  }

  client.$disconnect();
};

main();
