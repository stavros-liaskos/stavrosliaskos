<template>
  <div class="social-links">
    <ul>
      <li>
        <a href="https://github.com/stavros-liaskos" target="_blank" class="dis-txt fab fa-github"
           rel="noopener noreferrer">
          Github
        </a>
      </li>
      <li>
        <a href="https://bitbucket.org/stavros_liaskos/" target="_blank" class="dis-txt fab fa-bitbucket"
           rel="noopener noreferrer">
          Bitbucket
        </a>
      </li>
      <li>
        <a href="https://codepen.io/stavros-liaskos/#" target="_blank" class="dis-txt fab fa-codepen"
           rel="noopener noreferrer">
          Codepen
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/stavros-liaskos-66166094/" target="_blank" class="dis-txt fab fa-linkedin"
           rel="noopener noreferrer">LinkedIn
        </a>
      </li>
      <li>
        <a href="https://www.xing.com/profile/Stavros_Liaskos" target="_blank" class="dis-txt fab fa-xing"
           rel="noopener noreferrer">
          Xing
        </a>
      </li>
      <li>
        <a href="mailto:hello@stavrosliaskos.com" target="_blank" class="dis-txt fab fas fa-envelope">
          Mail
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/styles';

  .social-links {
    display: none;

    .fab {
      @extend .text-light;
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .social-links {
      display: block;
      position: absolute;
      bottom: $space_8;
      left: 0;
      text-align: center;
      margin-left: $space_2;

      .fab {
        animation: pulse-color 12s infinite alternate;
        margin-bottom: $space_1;
        cursor: pointer;
        @include zoom($navi_toolbar_initial_icons_size, $navi_toolbar_final_icons_size);
      }
    }
  }
</style>
