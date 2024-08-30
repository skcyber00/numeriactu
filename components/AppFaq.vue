<template>
  <!-- FAQ -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid md:grid-cols-5 gap-10">
      <div class="md:col-span-2">
        <div class="max-w-xs">
          <h2
            class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
          >
            Frequently<br />asked questions
          </h2>
          <p class="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
            Answers to the most frequently asked questions.
          </p>
        </div>
      </div>
      <!-- End Col -->

      <div class="md:col-span-3">
        <!-- Accordion -->
        <div
          class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700"
        >
          <div
            class="hs-accordion pb-3 acive"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
              Qui sommes nous ?
              <ChevronDownIcon
                class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
              <ChevronUpIcon
                class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <p class="text-gray-600 dark:text-neutral-400">
                Bienvenue sur <b>Numeriactu</b> ! Votre source incontournable
                d'information pour tout ce qui concerne l'actualité
                informatique, les jeux vidéo et surtout les dernières nouveautés
                en matière de high-tech. <br /><br />
                Nous vous proposons des articles détaillés, des analyses
                approfondies et des critiques éclairées pour vous tenir informé
                des tendances technologiques, des avancées innovantes et des
                développements marquants dans le monde numérique. Que vous soyez
                passionné d'informatique, fervent joueur ou simplement curieux
                des nouvelles technologies,
                <b>Numeriactu</b> est là pour satisfaire votre soif de
                connaissances et d'actualités. <br /><br />
                Rejoignez notre communauté et plongez dans un univers où
                l'innovation et la technologie se rencontrent pour façonner le
                futur.
              </p>
            </div>
          </div>

          <div
            class="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              My team has credits. How do we use them?
              <ChevronDownIcon
                class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
              <ChevronUpIcon
                class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <p class="text-gray-600 dark:text-neutral-400">
                Once your team signs up for a subscription plan. This is where
                we sit down, grab a cup of coffee and dial in the details.
              </p>
            </div>
          </div>

          <div
            class="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              How does Preline's pricing work?
              <ChevronDownIcon
                class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
              <ChevronUpIcon
                class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p class="text-gray-600 dark:text-neutral-400">
                Our subscriptions are tiered. Understanding the task at hand and
                ironing out the wrinkles is key.
              </p>
            </div>
          </div>

          <div
            class="hs-accordion pt-6 pb-3"
            id="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <button
              class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
            >
              How secure is Preline?
              <ChevronDownIcon
                class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
              <ChevronUpIcon
                class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
              />
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-four"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <p class="text-gray-600 dark:text-neutral-400">
                Protecting the data you trust to Preline is our first priority.
                This part is really crucial in keeping the project in line to
                completion.
              </p>
            </div>
          </div>
        </div>
        <!-- End Accordion -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End FAQ -->
</template>

<script setup>
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
</script>
