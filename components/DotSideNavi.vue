<!-- Side Scroll Dot Navi -->
<template>
  <div class="dot-side-nav z-2">
    <dot-navi-elem v-for="(n, index) in 3"
                   v-bind:key="index"
                   v-bind:href="linksIDs[index]"
                   v-on:test="setActive"
                   :index="n"
                   :active="active"
                   :linksIDs="linksIDs"
    />
  </div>
</template>

<script>
  import DotNaviElem from '~/atoms/DotNaviElem.vue';

  export default {
    components: {
      DotNaviElem
    },

    data() {
      return {
        index: 1,
        active: 1,
        linksIDs: ['#description', '#expertise', '#portfolio']
      };
    },

    methods: {
      setActive(index) {
        this.active = index;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  .dot-side-nav {
    display: none;
  }

  @include breakpoint($breakpoint_screen_md) {
    .dot-side-nav {
      display: block;
      position: fixed !important; // makes sure that position:relative from .z-2 is overwritten
      bottom: 45%;
      right: $space_3;
    }
  }
</style>
