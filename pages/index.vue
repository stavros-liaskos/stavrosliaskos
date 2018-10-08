<template>
  <div style="width: 100%;">
    <description/>
    <expertise/>
    <portfolio/>
  </div>
</template>

<script>
import Description from '~/components/Description.vue'
import Expertise from '~/components/Expertise.vue'
import Portfolio from '~/components/Portfolio.vue'

export default {
  components: {
    Description,
    Expertise,
    Portfolio
  }
}
</script>
