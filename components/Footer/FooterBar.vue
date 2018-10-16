<template>
  <footer class="footer z-3 container text-center">
    <div class="m-y-5">
      <logo/>
    </div>

    <footer-lower/>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue'
import FooterLower from './FooterLower.vue'

export default {
  components: {
    Logo,
    FooterLower
  }
}
</script>

<style lang="scss">
.footer {
  min-height: unset !important; // unset it from .container
  height: $footer_height;

  .logo {
    width: 50px;
  }
}
</style>
