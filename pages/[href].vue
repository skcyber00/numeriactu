<template>
  <Head>
    <Title>{{ article.title }}</Title>
    <Meta name="description" :content="article.description" />
  </Head>

  <!-- Blog Article -->
  <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
      <!-- Content -->
      <div class="lg:col-span-2">
        <div class="py-8 lg:pe-8">
          <div class="space-y-5 lg:space-y-8">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li>
                  <div class="flex items-center">
                    <NuxtLink
                      to="/"
                      class="mr-2 text-sm font-medium text-gray-900"
                      >Accueil</NuxtLink
                    >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-4 text-gray-300"
                    >
                      <path
                        d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"
                      />
                    </svg>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <NuxtLink
                      to="/news"
                      class="mr-2 text-sm font-medium text-gray-900"
                      >Article</NuxtLink
                    >
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-4 text-gray-300"
                    >
                      <path
                        d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"
                      />
                    </svg>
                  </div>
                </li>
                <li class="text-sm">
                  <a
                    :href="article.href"
                    aria-current="page"
                    class="font-medium text-gray-500 hover:text-gray-600"
                    >{{ article.title }}</a
                  >
                </li>
              </ol>
            </nav>

            <h2 class="text-3xl font-bold lg:text-5xl text-lg text-gray-800">
              {{ article.title }}
            </h2>

            <figure class="relative w-full h-60">
              <img
                class="size-full absolute top-0 start-0 object-cover rounded-xl"
                :src="'img/' + article.imageSrc"
                :alt="article.imageAlt"
              />
            </figure>

            <div class="flex items-center gap-x-5">
              <a
                class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200"
                href="#"
              >
                Company News
              </a>
              <p class="text-xs sm:text-sm text-gray-800">January 18, 2023</p>
            </div>

            <div v-if="article" class="text-lg text-gray-800">
              <p v-html="article.text"></p>
            </div>

            <div
              class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0"
            >
              <!-- Badges/Tags -->
              <div>
                <a
                  class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                  href="#"
                >
                  Plan
                </a>
                <a
                  class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                  href="#"
                >
                  Web development
                </a>
                <a
                  class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                  href="#"
                >
                  Free
                </a>
                <a
                  class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                  href="#"
                >
                  Team
                </a>
              </div>
              <!-- End Badges/Tags -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Content -->

      <!-- Sidebar -->
      <div
        class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent"
      >
        <div class="sticky top-0 start-0 py-8 lg:ps-8">
          <!-- Avatar Media -->
          <Avatar />
          <!-- End Avatar Media -->

          <ArticleListTop :articles="articles" />
        </div>
      </div>
      <!-- End Sidebar -->
    </div>
  </div>
  <!-- End Blog Article -->

  <aside
    aria-label="Related articles"
    class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
  >
    <div class="px-4 mx-auto max-w-screen-xl">
      <h2 class="mb-8 text-2xl font-bold text-gray-900">Related articles</h2>
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <article class="max-w-xs">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
              class="mb-5 rounded-lg"
              alt="Image 1"
            />
          </a>
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
            <a href="#">Our first office</a>
          </h2>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 2 minutes
          </a>
        </article>
        <article class="max-w-xs">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
              class="mb-5 rounded-lg"
              alt="Image 2"
            />
          </a>
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
            <a href="#">Enterprise design tips</a>
          </h2>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 12 minutes
          </a>
        </article>
        <article class="max-w-xs">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
              class="mb-5 rounded-lg"
              alt="Image 3"
            />
          </a>
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
            <a href="#">We partnered with Google</a>
          </h2>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 8 minutes
          </a>
        </article>
        <article class="max-w-xs">
          <a href="#">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
              class="mb-5 rounded-lg"
              alt="Image 4"
            />
          </a>
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900">
            <a href="#">Our first project with React</a>
          </h2>
          <p class="mb-4 text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
          >
            Read in 4 minutes
          </a>
        </article>
      </div>
    </div>
  </aside>
  <AppNewsletters />
</template>

<script setup lang="ts">
const route = useRoute();
const { data: article } = await useAsyncData("article", () =>
  $fetch(`/api/public/articles/${route.params.href}`)
);

const { data: articles } = await useAsyncData("articles", () =>
  $fetch(`/api/public/articles/top`)
);

definePageMeta({ auth: false });

// useSeoMeta({
//   title: article.title,
//   ogTitle: article.title,
//   description: article.description,
//   ogDescription: article.description,
//   ogImage: article.imageSrc,
//   twitterCard: "summary_large_image",
// });
</script>
