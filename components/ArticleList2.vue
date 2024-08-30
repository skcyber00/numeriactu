<template>
  <!-- Card Grid -->
  <div class="py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
    <!-- Card -->
    <NuxtLink
      v-for="article in articles"
      :key="article._id"
      class="group block"
      :to="'/' + article.href"
    >
      <div
        class="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800"
      >
        <img
          class="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
          :src="'/img/' + article.imageSrc"
          :alt="article.imageAlt"
        />
      </div>

      <div class="pt-4">
        <h3
          class="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white"
        >
          {{ article.title }}
        </h3>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">
          {{ article.description }}
        </p>

        <div class="mt-3 flex flex-wrap gap-2">
          <span
            class="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
          >
            Actualités
          </span>
          <span
            class="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
          >
            Jeux
          </span>
        </div>
      </div>
    </NuxtLink>
    <!-- End Card -->
  </div>
  <!-- End Card Grid -->
</template>

<script setup>
const { data: articles } = await useAsyncData("articles", () =>
  $fetch("/api/public/articles/list")
);
</script>
