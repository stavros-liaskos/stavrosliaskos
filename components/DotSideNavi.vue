<!-- Side Scroll Dot Navi -->
<template>
  <div class="dot-side-nav z-2">
    <dot-navi-elem
      v-for="(n, index) in 3"
      :key="index"
      :href="linksIDs[index]"
      :index="n"
      :active="active"
      :links-ids="linksIDs"
      @test="setActive"
    />
  </div>
</template>

<script>
import DotNaviElem from '~/components/DotNaviElem.vue'

export default {
  components: {
    DotNaviElem
  },

  data() {
    return {
      indexDot: 1,
      active: 1,
      linksIDs: ['#description', '#expertise', '#portfolio']
    }
  },

  methods: {
    setActive(index) {
      this.active = index
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/styles";.dot-side-nav {
  display: none;
}

@include breakpoint($breakpoint_screen_md) {
  .dot-side-nav {
    display: block;
    position: fixed !important; // ensure position:relative from .z-2 is overwritten
    bottom: 45%;
    right: $space_3;
  }
}
</style>
