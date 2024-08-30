<template>
  <Head>
    <Title>{{ category.title }}</Title>
    <Meta name="description" :content="category.description" />
  </Head>

  <section>
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="max-w-2xl text-center mx-auto">
          <h1
            class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white"
          >
            {{ category.title }}
          </h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            {{ category.description }}
          </p>
        </div>

        <div class="mt-10 relative max-w-5xl mx-auto">
          <img
            class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full top-0 start-0 object-cover rounded-xl"
            :src="'/img/' + category.imageSrc"
          />

          <div
            class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900"
          >
            <div class="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
          </div>

          <div
            class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full"
          >
            <div
              class="bg-white size-48 rounded-full dark:bg-neutral-900"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero -->
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <ArticleList />
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: category } = await useAsyncData("article", () =>
  $fetch(`/api/public/category/${route.params.category}`)
);

definePageMeta({ auth: false });
</script>
