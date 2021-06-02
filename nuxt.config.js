import colors from 'vuetify/es5/util/colors'
import pt from 'vuetify/es5/locale/pt'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - arkham-front',
    title: 'arkham-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_ROOT,
  },
  auth: {
    static: true,
    persistence: 'local',
    initialize: {
      onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/login',
      home: false,
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/me', method: 'get', propertyName: 'user' },
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-br',
      name: process.env.APP_NAME,
      short_name: process.env.APP_NAME,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    lang: {
      locales: { pt },
      current: 'pt',
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
      
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
