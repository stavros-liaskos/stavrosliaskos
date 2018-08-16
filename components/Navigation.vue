<!-- Slide-In Navigation Menu -->
<template>
  <div class="navigation z-1" v-bind:class="{ active: isNavOpen}">
    <navi-toolbar/>

    <div class="menu-container">
      <div class="menu-wrapper">

        <div class="">
          Hover me:
        </div>

        <ul class="menu-list">

          <li class="menu-item">
            <a href="/" class="item-link h1 flip">Home</a>
          </li>

          <li class="menu-item">
            <a href="/about" class="item-link h1 flip">About</a>
          </li>

          <li class="menu-item">
            <a href="/contact" class="item-link h1 flip">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import NaviToolbar from './NaviToolbar.vue';

  export default {
    components: {
      NaviToolbar
    },

    data() {
      return {
        isNavOpen: false
      };
    },

    methods: {
      initNavigationListener() {
        this.$root.$on('toggle.navigation.state', (isNaviOpen) => {
          this.isNavOpen = !isNaviOpen;
        });
      }
    },

    mounted() {
      this.initNavigationListener();
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  $navi_slide_out_time: .8s;

  .navigation {
    background: $color_black;
    position: fixed !important; // makes sure that position:relative from .z-2 is overwritten
    height: 100%;
    top: -100%;
    left: 0;
    right: 0;
    transition: top $navi_slide_out_time ease-out;

    &.active {
      // slide down effect in device
      top: 0;

      .menu-container .menu-wrapper .flip {
        transform: rotateY(0deg);
        opacity: 1;
      }
    }

    .item-link {
      @extend .text-light;
      @include underline();
    }

    .menu-container {
      height: 100%;
      text-align: center;
      padding: 12% 0;

      .menu-wrapper {
        height: 100%;

        .flip {
          position: relative;
          display: inline-block;
          opacity: 0;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          perspective: 1000px;
          transform: rotateY(180deg);
          transition: all .3s linear $navi_slide_out_time;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 100%;
        }

        .menu-item {
          display: inline-block;
          margin: 0;
          width: auto;
        }
      }
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .navigation {
      width: 100%;
      left: -100%;
      top: unset;
      transition: left $navi_slide_out_time ease-out;

      &.active {
        // slide right effect in device
        left: 0;
      }

      .menu-container {
        width: 90%;
        padding: 0;

        .menu-list {
          flex-direction: row;
        }
      }
    }
  }
</style>
