<!-- Dot Navi Element used for Side Dot Navi -->
<template>
  <a class="dot-wrapper"
     v-scroll-to="{el: linkID}"
     v-on:click="activateDotNaviElem()"
     v-bind:class="{ active: active === index}"
  >
    <span class="dot"></span>
  </a>
</template>

<script>
  export default {
    props: ['index', 'active', 'linksIDs'],

    computed: {
      linkID() {
        return this.linksIDs[this.index - 1];
      }
    },

    methods: {
      /**
       * Deactivate all DotNaviElems and then activate the clicked one
       */
      activateDotNaviElem() {
        this.$emit('test', this.index);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  // Dot elem variables
  $dot_wrapper_width: 17px;
  $dot_wrapper_height: $dot_wrapper_width;
  $dot_el_color: $color_dark_grey;
  $dot_animation_colour: $color_dark_grey;
  $dot_animation_blank_space: 4px;

  .dot-wrapper {
    position: relative;
    display: block;
    width: $dot_wrapper_width;
    height: $dot_wrapper_height;
    transform: rotate(45deg);
    margin: $space_2;
    cursor: pointer;
    @include setBorderAnimation($dot_animation_colour, 1px);

    .dot {
      position: absolute;
      display: inline-block;
      top: $dot_animation_blank_space;
      left: $dot_animation_blank_space;
      bottom: $dot_animation_blank_space;
      right: $dot_animation_blank_space;
      background: $dot_el_color;
    }
  }
</style>
