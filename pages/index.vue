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

posts.value = initialData.value ?? [];
</script>
<template>
  <NuxtImg src="/icon-green.svg" />
  <div v-if="status === 'success' && posts.length" class="flex flex-col gap-2">
    <div v-for="post in posts" :key="post.id">
      <h2 class="text-lg font-bold">
        {{ new Date(post.createdAt).toLocaleDateString() }}
      </h2>
      <p class="text-sm">{{ post.text }}</p>
    </div>
  </div>
</template>
