<template>
  <!-- Table Section -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div
            class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-gray-800 dark:border-neutral-700"
          >
            <!-- Header -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700"
            >
              <!-- Input -->
              <div class="sm:col-span-1">
                <label for="hs-as-table-product-review-search" class="sr-only"
                  >Search</label
                >
                <div class="relative">
                  <input
                    type="text"
                    id="hs-as-table-product-review-search"
                    name="hs-as-table-product-review-search"
                    class="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Search"
                  />
                  <div
                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4"
                  >
                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <!-- End Input -->
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table
              class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"
            >
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
                      >
                        Titre
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
                      >
                        Review
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
                      >
                        Date
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-start">
                    <div class="flex items-center gap-x-2">
                      <span
                        class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
                      >
                        Status
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-end"></th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr
                  v-for="article in articles"
                  :key="article.id"
                  class="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <td class="size-px whitespace-nowrap align-top">
                    <div class="block p-6" href="#">
                      <div class="flex items-center gap-x-4">
                        <img
                          class="flex-shrink-0 size-[38px] rounded-lg"
                          :src="'/img/' + article.imageSrc"
                          alt="Image Description"
                        />
                        <div>
                          <span
                            class="block text-sm font-semibold text-gray-800 dark:text-neutral-200"
                          >
                            {{
                              article.title.length > 30
                                ? article.title.substring(0, 30) + "..."
                                : article.title
                            }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="h-px w-72 min-w-72 align-top">
                    <div class="block p-6" href="#">
                      <span
                        class="block text-sm text-gray-500 dark:text-neutral-500"
                      >
                        {{
                          article.description.length > 160
                            ? article.description.substring(0, 160) + "..."
                            : article.description
                        }}
                      </span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap align-top">
                    <div class="block p-6" href="#">
                      <span
                        class="text-sm text-gray-600 dark:text-neutral-400"
                        >{{
                          new Intl.DateTimeFormat("fr-FR", {
                            dateStyle: "medium",
                          }).format(article.createdAt)
                        }}</span
                      >
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap align-top">
                    <div class="block p-6" href="#">
                      <span
                        v-if="article.publish == 1"
                        class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
                      >
                        <CheckIcon class="h-6 w-6" aria-hidden="true" />
                        Publié
                      </span>
                      <span
                        v-else
                        class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
                      >
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        Non publié
                      </span>
                    </div>
                  </td>
                  <td class="size-px whitespace-nowrap">
                    <div class="px-6 py-1.5">
                      <NuxtLink
                        class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                        :to="'articles/' + article._id"
                      >
                        Edit
                      </NuxtLink>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- End Table -->

            <!-- Footer -->
            <div
              class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700"
            >
              <div class="max-w-sm space-y-3">
                <select
                  class="py-2 px-3 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-neutral-700 dark:text-neutral-400"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option selected>5</option>
                  <option>6</option>
                </select>
              </div>

              <div>
                <div class="inline-flex gap-x-2">
                  <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-neutral-700 dark:text-white dark:hover:bg-gray-700"
                  >
                    <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
                    Prev
                  </button>

                  <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-neutral-700 dark:text-white dark:hover:bg-gray-700"
                  >
                    Next
                    <ChevronRightIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <!-- End Footer -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Table Section -->
</template>

<script setup>
import {
  CheckIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const { data: articles } = await useAsyncData("articles", () =>
  $fetch("/api/private/articles/list")
);
</script>
