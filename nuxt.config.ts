export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Ecommerce', 
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',

      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
          integrity: 'sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==',
          crossorigin: 'anonymous',
          referrerpolicy:"no-referrer"
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
          integrity: 'sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://dolish.remonhasan.com/api'
    }
  }
})
