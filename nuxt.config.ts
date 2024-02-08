// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        download: true,
        inject: true
      }
  }],
 
],

css: ['~/assets/main.css'],
ssr: true,



})


