// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "monsite",
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-mongoose", "@nuxt/ui", "@sidebase/nuxt-auth"],
  plugins: ["~/plugins/preline.client.ts"],
  build: {
    transpile: ["jsonwebtoken"],
  },
  auth: {
    baseURL: "/api/private/auth",
    provider: {
      type: "local",
      endpoints: {
        getSession: { path: "/user" },
      },
      pages: {
        login: "/admin/signin",
      },
      token: {
        signInResponseTokenPointer: "/token/accessToken",
      },
      session: {
        dataType: {
          id: "string",
          email: "string",
          name: "string",
          role: "'admin' | 'guest' | 'account'",
          subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]",
        },
        dataResponsePointer: "/",
      },
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,
      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: 1000 * 60 * 5,
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
  routeRules: {
    "/with-caching": {
      swr: 86400000,
      auth: {
        disableServerSideAuth: true,
      },
    },
  },
});
