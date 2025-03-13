export default defineEventHandler(async (event) => {
  const res = await $fetch(
    "https://o0idzpelqi.execute-api.eu-central-1.amazonaws.com/posts/all?limit=10",
    {
      headers: {
        Authorization: "Bearer ABCDEF",
      },
    }
  );
  console.log(res);
  const { posts } = JSON.parse(res);
  return posts;
});
