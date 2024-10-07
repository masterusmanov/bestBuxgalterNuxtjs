// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  app: {
    head: {
      title: 'bestbuxgalter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'buxgalteriyaga oid barcha xizmatlar' },
        { name: 'keywords', content: 'biznes, audit, moliya, soliq, xisobni tiklash' },
        { name: 'robots', content: 'index, follow' },
      ],
      
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/bestlogo.svg' },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Jost&family=Kaushan+Script&family=Montserrat+Alternates:wght@600&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Rubik:wght@400;700&display=swap'
        },
      ]
    }
  }
})
