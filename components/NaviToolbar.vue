<!-- Fixed Navigation Toolbar (Desktop: left-side, Device: top) -->
<template>
  <div class="navi-toolbar">
    <div class="navi-toolbar-container p-l-2">
      <logo/>

      <burger/>

      <div class="social-links">
        <social-links/>
      </div>

      <span class="version text-light">{{ version }}</span>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Burger from '~/components/Burger.vue'
import SocialLinks from '~/components/SocialLinks.vue'
import pack from '~/package.json'

export default {
  components: {
    Logo,
    Burger,
    SocialLinks
  },

  computed: {
    version() {
      return 'v' + pack.version
    }
  }
}
</script>

<style lang="scss">
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

    .logo {
      position: absolute;
      top: $space_2;
      left: $space_2;
      width: $space_5;
    }

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
