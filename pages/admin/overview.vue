<template>
  <Head>
    <Title>Dashboard</Title>
  </Head>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
    <div
      class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
    ></div>
  </div>
  <div
    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
  >
    <pre>Status: {{ status }}</pre>
    <pre>Data: {{ data || "no session data present, are you logged in?" }}</pre>
    <pre>Last refreshed at: {{ lastRefreshedAt || "no refresh happened" }}</pre>
    <pre>JWT token: {{ token || "no token present, are you logged in?" }}</pre>
  </div>
  <div class="grid grid-cols-2 gap-4 mb-4">
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
    ></div>
  </div>
</template>

<script setup lang="ts">
const { signIn, token, data, status, lastRefreshedAt } = useAuth();

definePageMeta({
  layout: "admin",
  middleware: "auth",
});
</script>
