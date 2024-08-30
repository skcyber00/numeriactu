<template>
  <div class="space-y-6">
    <!-- Media -->
    <div v-for="article in articles" :key="article._id">
      <NuxtLink
        class="group flex items-center gap-x-6"
        :to="'/' + article.href"
      >
        <div class="grow">
          <span
            class="text-sm font-bold text-gray-800 group-hover:text-blue-600"
          >
            {{ article.title }}
          </span>
        </div>

        <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
          <img
            class="size-full absolute top-0 start-0 object-cover rounded-lg"
            :src="'img/' + article.imageSrc"
            :alt="article.imageAlt"
          />
        </div>
      </NuxtLink>
    </div>
    <!-- End Media -->
  </div>
</template>

<script setup lang="ts">
const { articles } = defineProps(["articles"]);
</script>
