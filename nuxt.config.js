export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lesson',
    htmlAttrs: {
      lang: 'ja'
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

  loading: '~/components/loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // このオブジェクトの値は $config を使ってクライアントとサーバー両方からアクセスできます（webページから見れる）。
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  }

  // このオブジェクトの値は $config を使ってサーバーからのみアクセスできますwebページから見れない）。
  // サーバー用の publicRuntimeConfig を上書きします。
  // privateRuntimeConfig: {
  //   apiSecret: process.env.API_SECRET
  // }
}
