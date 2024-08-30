<template>
  <Head>
    <Title>Images</Title>
  </Head>

  <!-- Card Section -->
  <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-white rounded-xl shadow dark:bg-gray-800">
      <div class="pt-0 p-4 sm:pt-0 sm:p-7">
        <!-- Grid -->
        <div class="space-y-4 sm:space-y-6">
          <div class="space-y-2">
            <label
              for="af-submit-app-upload-images"
              class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
            >
              Ajout d'image
            </label>

            <label
              for="af-submit-app-upload-images"
              class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-neutral-700"
            >
              <input
                id="af-submit-app-upload-images"
                name="af-submit-app-upload-images"
                class="sr-only"
                type="file"
                ref="fileInput"
                @change="handleFileChange"
              />
              <CloudIcon
                class="size-10 mx-auto text-gray-400 dark:text-neutral-600"
                aria-hidden="true"
              />
              <span
                class="mt-2 block text-sm text-gray-800 dark:text-neutral-200"
              >
                Parcourez votre appareil ou
                <span class="group-hover:text-blue-700 text-blue-600"
                  >faites un glisser-déposer</span
                >
              </span>
              <span
                class="mt-1 block text-xs text-gray-500 dark:text-neutral-500"
              >
                Maximum file size is 2 MB
              </span>
            </label>
          </div>
        </div>
        <!-- End Grid -->

        <div class="mt-5 flex justify-center gap-x-2">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            @click="submit"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>

  <div class="py-10 lg:py-14">
    <div class="md:max-w-2xl md:mx-auto">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div v-for="image in images" :key="image.id" class="space-y-2">
          <img
            :src="image.path"
            @click="copyURL(image.path)"
            class="w-full sm:size-40 object-cover rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CloudIcon } from "@heroicons/vue/24/outline";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const fileInput = ref<HTMLInputElement | null>(null);
const files = ref();

function handleFileChange() {
  files.value = fileInput.value?.files;
}

async function submit() {
  const file = files.value[0];

  const formData = new FormData();
  formData.append("files", file);

  await $fetch("/api/private/images/upload", {
    method: "POST",
    body: formData,
  });
}

async function copyURL(payload: any) {
  await navigator.clipboard.writeText(payload);
}

const { data: images } = await useFetch("/api/private/images/list");
</script>
