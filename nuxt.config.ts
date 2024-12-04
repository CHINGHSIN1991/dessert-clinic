// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: '甜點寬治療室',
      meta: [
        { name: 'description', content: '這是一個甜點網站' },
        { property: 'title', content: '甜點寬治療室' },
        { property: 'og:title', content: ''

        }
      ]
    }
  },
  supabase: {
    redirect: false,
  },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})