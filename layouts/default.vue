<template>
  <div :class="{ active: isNavOpen }" class="app">
    <navigation />

    <div class="app-wrapper">
      <div class="container">
        <nuxt />
      </div>

      <footer-bar />
    </div>

    <particles />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Particles from '~/components/Particles.vue'
import FooterBar from '~/components/FooterBar.vue'
import FontFaceObserver from 'fontfaceobserver'

export default {
  components: {
    Navigation,
    Particles,
    FooterBar,
  },

  data() {
    return {
      isNavOpen: false,
    }
  },

  mounted() {
    this.initNavigationListener()
    this.fontFaceLoader()
  },

  methods: {
    /**
     * Initialize Navigation Listener for toggling state of Burger, Navigation, app elements
     */
    initNavigationListener() {
      this.$root.$on('toggle-navigation-state', (isNaviOpen) => {
        this.isNavOpen = !isNaviOpen
      })
    },

    fontFaceLoader() {
      // Font loading: https://github.com/zeit/next.js/issues/512
      const robotoUrl = 'https://fonts.googleapis.com/css?family=Roboto+Mono'

      let linkRoboto = document.createElement('link'),
        roboto = new FontFaceObserver('Roboto')

      linkRoboto.href = robotoUrl
      linkRoboto.rel = 'stylesheet'

      document.head.appendChild(linkRoboto)

      // roboto.load().then(() => {
      Promise.all([roboto.load()]).then(
        function () {
          document.documentElement.classList.add('roboto')
        },
        function () {
          console.log('🍺')
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles';

.app {
  width: 100%;
  font-family: $font_family_default !important;
}

@include breakpoint($breakpoint_screen_md) {
  .app-wrapper {
    margin-left: $navi_toolbar_desktop_width;
  }
}
</style>
