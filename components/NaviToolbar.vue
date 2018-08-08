<!-- Fixed Navigation Toolbar (Desktop: left-side, Device: top) -->
<template>
  <div class="navi-toolbar">
    <div class="navi-toolbar-container">
      <burger/>

      <social-links/>

      <span class="version text-light">{{version}}</span>
    </div>
  </div>
</template>

<script>
  import Burger from '~/components/Burger.vue';
  import SocialLinks from '~/components/SocialLinks.vue';
  import pack from '~/package.json';

  export default {
    components: {
      Burger,
      SocialLinks
    },

    computed: {
      version() {
        return 'v' + pack.version;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  .navi-toolbar {
    position: fixed;
    top: 0;
    bottom: unset;
    right: 0;
    left: 0;
    height: $navi_toolbar_device_height;
    background: inherit;

    .navi-toolbar-container {
      position: relative;
      height: 100%;

      .version {
        display: none;
        animation: pulse-color 12s infinite alternate;
      }
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .navi-toolbar {
      bottom: 0;
      height: unset;
      width: $navi_toolbar_desktop_width;

      .navi-toolbar-container .version {
        display: inline;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
</style>
