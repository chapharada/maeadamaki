//dart sassの処理
const Sass = require('sass')
const Fiber = require('fibers')

export default {
  target: 'static',
  head: {
    title: 'makiMaeda',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~/assets/scss/reset.scss', lang: 'scss' },
    { src: '~/assets/scss/common.scss', lang: 'scss' }
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/style-resources',
  ],
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },
  styleResources: {
    scss: ['~/assets/scss/global/_var.scss'],
    scss: ['~/assets/scss/global/_mixin.scss'],
  },
  buildModules: ['nuxt-microcms-module'],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  }
}
