export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Arctic Tours',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/site.scss'],

  // Global variables import
  styleResources: {
    scss: ['@/assets/styles/vars.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/aos', mode: 'client' }
  ],

  purgeCSS: {
    whitelist: ['aos-init', 'aos-animate', 'data-aos-delay', 'data-aos-duration', 'fade-up', 'zoom-in']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', extensions: ['vue'] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-font-loader',
    '@nuxtjs/style-resources',
    [
      '@nuxt/image',
      {
        provider: 'static'
      }
    ]
  ],

  // Custom font loader
  fontLoader: {
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
    prefetch: true,
    preconnect: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Router
  router: {
    base: '/',
    mode: 'history'
  }
}
