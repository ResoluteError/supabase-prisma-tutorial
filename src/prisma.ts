import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const main = async () => {
  const post = await client.post.findFirst({
    where: { title: "Test title" },
    include: { author: true, comments: true },
  });

  console.log(post);

  if (post) {
    const newPost = await client.post.update({
      data: { text: "Updated text" },
      where: { id: post.id },
    });

    console.log("updatedPost:", newPost);
  }

  client.$disconnect();
};

main();
