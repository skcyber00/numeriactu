<template>
  <Head>
    <Title>Articles</Title>
  </Head>

  <NuxtLink to="/admin/articles/create">
    <button
      class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Créer un article
    </button>
  </NuxtLink>

  <AdminArticleList />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
</script>
