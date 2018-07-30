module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Stavros Liaskos // Frontend Developer',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'I\'m Stavros Liaskos, a Web Developer who likes to mix code, animation, interactivity and generative design with state-of-art technologies. I work across the full JavaScript stack '
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'canonical', href: 'https://stavrosliaskos.com/'}
    ]
  },
  /*
  ** Disable progress bar
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  /*
  ** Plugins
   */
  plugins: [
    {src: '~/plugins/vue-scrollto'},
    {src: '~/plugins/vue-particles', ssr: false},
    {src: '~/plugins/vue-typer', ssr: false},
    {src: '~/plugins/vue-lazyload', ssr: false}
  ],
  /*
  ** Style configuration https://nuxtjs.org/api/configuration-css#the-css-property
   */
  css: [
    // Load a node module directly (here it's a SASS file)
    // 'bulma',
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/styles.scss'
  ]
};
