const pkg = require('./package')
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'

const headTitle = 'Stavros Liaskos // Frontend Developer',
  headDescription =
    "I'm Stavros Liaskos, a Web Developer who likes to mix code, animation, interactivity and generative design with state-of-art technologies. I work across the full JavaScript stack ",
  ogUrl = pkg.homepage,
  ogType = 'website',
  ogImage = `${pkg.homepage}/favicon/logo_og_image.png`,
  ogImageWidth = '898',
  ogImageHeight = '898'

module.exports = {
  telemetry: false,
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: headTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'msapplication-config', content: './favicon/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: headDescription,
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://stavrosliaskos.com/' },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: './favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: './favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: './favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: './favicon/site.webmanifest' },
      {
        rel: 'mask-icon',
        color: '#000000',
        href: './favicon/safari-pinned-tab.svg',
      },
      { rel: 'shortcut icon', href: './favicon/favicon.ico' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: headTitle,
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: headDescription,
      },
      {
        hid: `og:type`,
        property: 'og:type',
        content: ogType,
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: ogUrl,
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: ogImage,
      },
      {
        hid: `og:image:width`,
        property: 'og:image:width',
        content: ogImageWidth,
      },
      {
        hid: `og:image:height`,
        property: 'og:image:height',
        content: ogImageHeight,
      },
    ],
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
      { url: '/terms-and-conditions', changefreq: 'daily' },
    ],
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
    { src: '~/plugins/vue-lazyload', ssr: false },
  ],

  /*
   ** Customize modules
   */
  modules: [
    // load SASS file globally
    // https://github.com/nuxt/nuxt.js/issues/1092#issuecomment-336693839
    [
      'nuxt-sass-resources-loader',
      {
        resources: './assets/styles.scss',
      },
    ],
    '@nuxtjs/sitemap',
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
          exclude: /(node_modules)/,
        })
      }

      if (!ctx.isDev) {
        // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
        // for more information about purgecss.
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue'),
            ]),
            whitelist: ['html', 'body'],
          })
        )
      }

      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [{ removeDoctype: true }, { removeComments: true }],
          },
        },
      })
    },
    extractCSS: false,
  },
}
