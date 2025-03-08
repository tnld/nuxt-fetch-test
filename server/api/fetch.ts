export default defineEventHandler(async (event) => {
    const res = await $fetch('https://dummyjson.com/posts');
    const { posts } = res
    return posts
});