<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav"
    id="drawer-navigation"
  >
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <NuxtLink
            to="/admin/overview"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <ChartPieIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-3">Overview</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/articles"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <DocumentTextIcon class="h-6 w-6" aria-hidden="true" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap"
              >Articles</span
            >
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/category"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <ListBulletIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-3">Catégories</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/images"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <PhotoIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-3">Images</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/assets"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <TableCellsIcon class="h-6 w-6" aria-hidden="true" />
            <span class="ml-3">Assets</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import {
  ChartPieIcon,
  DocumentTextIcon,
  PhotoIcon,
  TableCellsIcon,
  ListBulletIcon,
} from "@heroicons/vue/24/outline";
</script>
