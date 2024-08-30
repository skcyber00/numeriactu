<template>
  <form action="#">
    <div
      class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"
    >
      <div class="relative w-full">
        <label
          for="email"
          class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Entrez votre email</label
        >
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path
              d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
            />
            <path
              d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
            />
          </svg>
        </div>
        <input
          class="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 sm:rounded-none sm:rounded-l-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Entrez votre email"
          type="email"
          id="email"
          required=""
        />
      </div>
      <div>
        <button
          type="submit"
          class="bg-gray-50 py-3 px-5 w-full text-sm font-medium text-center bg-blue-600 hover:bg-blue-700 rounded-lg border border-gray-200 cursor-pointer sm:rounded-none sm:rounded-r-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
        >
          S'inscire
        </button>
      </div>
    </div>
    <div
      class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300"
    >
      Nous nous soucions de la protection de vos données.
      <a
        href="#"
        class="font-medium text-primary-600 dark:text-primary-200 hover:underline"
        >Lisez notre politique de confidentialité </a
      >.
    </div>
  </form>
</template>
