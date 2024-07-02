// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook',
    "@nuxtjs/sanity",
    "@nuxtjs/i18n",
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  storybook: {
    url: 'http://localhost:6006', 
    // storybookRoute: '/__storybook__',
    port: 6006,
  },
  i18n: {
    strategy: "prefix",
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2024-03-15",
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || "http://localhost:3333",
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      "postcss-nested": {},
    },
  },
})