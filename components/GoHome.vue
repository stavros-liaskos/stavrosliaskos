<template>
  <nuxt-link :style="[property]" to="/">
    <h4 class="link">
      Go back to home
      <icon-undo />
    </h4>
  </nuxt-link>
</template>

<script>
import IconUndo from '~/components/icons/IconUndo'

export default {
  components: {
    IconUndo
  },
  props: {
    property: {
      type: Object,
      default: function() {
        return { textAlign: 'right' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-undo {
  width: 15px;
}
</style>
