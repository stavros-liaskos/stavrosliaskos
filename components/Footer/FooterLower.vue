<template>
  <div class="footer-lower">
    <span class="text-light footer-item">© {{ dateYear }} Stavros Liaskos</span>

    <nuxt-link 
      class=" footer-item" 
      to="/privacy-policy">Privacy Policy </nuxt-link>
    <nuxt-link 
      class=" footer-item" 
      to="/terms-and-conditions">Terms and Conditions </nuxt-link>
    <nuxt-link 
      class=" footer-item" 
      to="/sitemap.xml">Sitemap </nuxt-link>
      <!--
    <li><a href="/contact"> Support</a></li>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer-lower {
  display: flex;
  flex-direction: column;

  .footer-item {
    margin-top: $space_2;
  }
}

@include breakpoint($breakpoint_screen_md) {
  .footer-lower {
    display: block;

    .footer-item {
      float: right;
      margin-left: $space_3;

      &:first-child {
        float: left;
        margin-left: 0;
      }
    }
  }
}
</style>
