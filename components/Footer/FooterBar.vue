<template>
  <footer class="footer z-3 container text-center p-t-7">
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
  min-height: unset !important; // unset it from .container
  height: $footer_height;
}
</style>
