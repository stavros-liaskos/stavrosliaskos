<template>
  <div class="footer-lower">
    <span class="text-light footer-item">© {{dateYear}} Stavros Liaskos</span>
    <a href="/privacy-policy" class=" footer-item">Privacy Policy </a>
    <a href="/terms-and-conditions" class=" footer-item">Terms and Conditions </a>
    <!--
    <li><a href="https://google.com/"> Sitemap |</a></li>
    -->
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
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/styles';

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
