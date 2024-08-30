<template>
  <Head>
    <Title>Créer article</Title>
  </Head>

  <!-- Card Section -->
  <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <form>
      <!-- Card -->
      <div class="bg-white rounded-xl shadow dark:bg-gray-800">
        <div class="pt-0 p-4 sm:pt-0 sm:p-7">
          <!-- Grid -->
          <div class="space-y-4 sm:space-y-6">
            <div class="space-y-2">
              <label
                for="af-submit-title"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Titre
              </label>

              <input
                id="af-submit-title"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Entrez un titre détaillé"
                v-model="form.title"
              />
            </div>

            <div class="space-y-2">
              <label
                for="af-description"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Description
              </label>

              <input
                id="description"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Courte description de l'article."
                v-model="form.description"
              />
            </div>

            <div class="space-y-2">
              <label
                for="af-submit-href"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                URL
              </label>

              <input
                id="af-submit-href"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="https://example.so"
                v-model="form.href"
              />
            </div>

            <div class="space-y-2">
              <label
                for="af-submit-app-upload-images"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Preview image
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

            <div class="space-y-2">
              <label
                for="af-submit-app-category"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Categorie
              </label>

              <select
                id="af-submit-app-category"
                class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                v-model="form.category"
              >
                <option selected>Select a category</option>
                <option
                  v-for="cate in category"
                  :key="cate._id"
                  :value="cate._id"
                >
                  {{ cate.title }}
                </option>
              </select>
            </div>

            <div class="space-y-2">
              <label
                for="af-submit-app-text"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Contenu de l'article
              </label>

              <!-- <Editor
                  v-model="descriptionTiny"
                  api-key="1aks0sqaycwyvvwbqm5t8bd542sbb2frllxpm3j4f9irvp4e"
                  :init="{
                    language: 'fr_FR',
                    height: 550,
                    convert_urls: false,
                    plugins: [
                      'save autosave fullscreen link autolink lists image media table',
                      'searchreplace visualblocks code print preview anchor charmap',
                      'insertdatetime media table paste code help wordcount advlist emoticons',
                    ],
                    toolbar:
                      'save undo redo | formatselect | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | emoticons help',
                  }"
                  :value="descriptionTiny"
                /> -->

              <textarea
                id="af-submit-app-text"
                class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                rows="6"
                placeholder="Contenu de l'article."
                v-model="form.text"
              ></textarea>
            </div>

            <div class="space-y-2">
              <label
                for="af-title-seo"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Titre SEO
              </label>

              <input
                id="af-title-seo"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Titre visible par les moteurs de recherche."
                v-model="form.titleSeo"
              />
            </div>

            <div class="space-y-2">
              <label
                for="af-description-seo"
                class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Description SEO
              </label>

              <input
                id="description-seo"
                type="text"
                class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Courte description de l'article visible par les moteurs de recherche."
                v-model="form.descriptionSeo"
              />
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-5 flex justify-center gap-x-2">
            <button
              type="button"
              class="py-3 px-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              @click="submit"
            >
              Créer
            </button>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </form>
  </div>
  <!-- End Card Section -->
</template>

<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";
import { CloudIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/outline";

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

const fileInput = ref<HTMLInputElement | null>(null);
const files = ref();

let form = reactive({
  title: null,
  description: null,
  href: null,
  imageSrc: null,
  imageAlt: null,
  category: null,
  text: null,
  titleSeo: null,
  descriptionSeo: null,
});

function handleFileChange() {
  files.value = fileInput.value?.files;
}

async function submit() {
  const file = files.value[0];

  const formData = new FormData();
  formData.append("files", file);
  formData.append("title", form.title);
  formData.append("description", form.description);
  formData.append("href", form.href);
  formData.append("imageSrc", form.imageSrc);
  formData.append("imageAlt", form.imageAlt);
  formData.append("category", form.category);
  formData.append("text", form.text);
  formData.append("titleSeo", form.titleSeo);
  formData.append("descriptionSeo", form.descriptionSeo);

  await $fetch("/api/private/articles/create", {
    method: "POST",
    body: formData,
  });
}

const { data: category } = await useAsyncData("category", () =>
  $fetch("/api/private/category/list")
);
</script>
