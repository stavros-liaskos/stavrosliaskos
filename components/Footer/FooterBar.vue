<template>
  <footer class="footer z-3 container text-center">
    <div class="m-b-5">
      <a 
        href="/" 
        class="h2 underline">stavrosliaskos.com</a>
    </div>

    <footer-lower/>
  </footer>
</template>

<script>
import FooterLower from './FooterLower.vue'

export default {
  components: {
    FooterLower
  }
}
</script>

<style lang="scss">
.footer {
  height: $footer_height;
}
</style>
