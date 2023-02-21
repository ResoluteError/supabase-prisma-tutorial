import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/supabaseTypes";

const client = createClient<Database>(
  "http://localhost:54321",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
);

const main = async () => {
  const postRequest = await client
    .from("post")
    .select("*, user(*), comment (*)")
    .eq("title", "Test title");

  if (postRequest.error) {
    console.log("error:", postRequest.error);
    return;
  }

  console.log(JSON.stringify(postRequest.data, null, 2));
};

const withJoinTableQuery = async () => {
  console.log("Querying with Join Table and named relationships");
  const postRequest = await client
    .from("post")
    .select("*, author:authorId(*), comment (*), likedBy:_LikedPosts(user(*))") // the colon syntax is optional and allows you to defined a custom name on a join field
    .eq("title", "Test title");

  // alternative:
  // const postRequest = await client
  // .from("post")
  // .select("*, user(*), comment (*), _LikedPosts(user(*))")
  // .eq("title", "Test title");

  if (postRequest.error) {
    console.log("error:", postRequest.error);
    return;
  }

  console.log(JSON.stringify(postRequest.data, null, 2));
};

main().then((_) => withJoinTableQuery());
