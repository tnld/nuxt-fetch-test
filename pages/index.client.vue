<script setup>
const {
  data: initialData,
  status,
  refresh,
  error,
} = await useFetch("/api/fetch", {
  server: true,
});

console.log("Data:", initialData.value);

const posts = ref([]);
const isLoading = ref(false);

posts.value = initialData.value ?? [];
</script>
<template>
  Test Data:
  <div v-if="status === 'success' && posts.length">
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
