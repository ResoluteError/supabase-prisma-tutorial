import { post, Prisma, PrismaClient, user } from "@prisma/client";

const client = new PrismaClient();

const getUsers = (): Prisma.userCreateInput[] => [
  { email: "test@mail.com", name: "bob" },
  { email: "test1@mail.com", name: "steve" },
  { email: "test2@mail.com", name: "charley" },
];

const getPosts = (users: user[]): Prisma.postCreateInput[] => [
  {
    author: { connect: { id: users[0].id } },
    likedBy: { connect: [{ id: users[1].id }, { id: users[2].id }] },
    text: "test post 1",
    title: "Test title",
  },
  {
    author: { connect: { id: users[1].id } },
    likedBy: { connect: [{ id: users[2].id }] },
    text: "test post 2",
    title: "Test title 2",
  },
];

const getComments = (
  users: user[],
  posts: post[]
): Prisma.commentCreateInput[] => [
  {
    creator: { connect: { id: users[1].id } },
    post: { connect: { id: posts[0].id } },
    text: "this is a test comment",
  },
];

const main = async () => {
  const users = await Promise.all(
    getUsers().map((user) => client.user.create({ data: user }))
  );
  const posts = await Promise.all(
    getPosts(users).map((post) => client.post.create({ data: post }))
  );
  const comments = await Promise.all(
    getComments(users, posts).map((comment) =>
      client.comment.create({ data: comment })
    )
  );
};

main();
