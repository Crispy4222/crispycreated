export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/icon'],
  app: {
    head: {
      title: 'CRISPY • Felix Garage',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f172a' }
      ]
    }
  },
  ui: { theme: { extend: { colors: { brand: '#06b6d4' } } } },
})
