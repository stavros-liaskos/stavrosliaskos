<template>
  <footer class="footer z-3 sidebar text-center">
    <div class="m-b-5">
      <a href="/" class="h2 underline-dark">stavrosliaskos.com</a>
    </div>

    <footer-lower/>
  </footer>
</template>

<script>
  import FooterLower from './FooterLower.vue';

  export default {
    components: {
      FooterLower
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/styles';

  .footer {
    height: $footer_height;
  }
</style>
