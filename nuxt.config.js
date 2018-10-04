const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Stavros Liaskos // Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I'm Stavros Liaskos, a Web Developer who likes to mix code, animation, interactivity and generative design with state-of-art technologies. I work across the full JavaScript stack "
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'canonical', href: 'https://stavrosliaskos.com/' }
    ]
  },

  /*
 ** Site Map Options
 */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://stavrosliaskos.com/',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    // Enable me when using nuxt generate
    generate: false,
    exclude: [
      // empty
    ],
    routes: [
      { url: '/', changefreq: 'daily' },
      { url: '/about', changefreq: 'daily' },
      { url: '/contact', changefreq: 'daily' },
      { url: '/privacy-policy', changefreq: 'daily' },
      { url: '/terms-and-conditions', changefreq: 'daily' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-scrollto' },
    { src: '~/plugins/vue-particles', ssr: false },
    { src: '~/plugins/vue-typer', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false }
  ],

  /*
  ** Customize modules
  */
  modules: [
    '@nuxtjs/sitemap',
    // load SASS file globally
    // https://github.com/nuxt/nuxt.js/issues/1092#issuecomment-336693839
    [
      'nuxt-sass-resources-loader',
      {
        resources: './assets/styles.scss'
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
