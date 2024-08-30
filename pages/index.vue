<template>
  <div>
    <!-- <AppCaroussel /> -->
    <LayoutsAppBanner3 />
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <ArticleList2 />
      <!-- <ArticleList /> -->
      <AppPrestation />
      <AppNewsletters />
      <AppFaq />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Numeriactu",
  ogTitle: "Numeriactu",
  description: "",
  ogDescription: "",
  ogImage: "https://example.com/numeriactu.png",
  twitterCard: "summary_large_image",
});

definePageMeta({ auth: false });
</script>
