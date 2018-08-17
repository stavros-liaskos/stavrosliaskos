<template>
  <div class="social-links">
    <ul>
      <li>
        <a href="https://github.com/stavros-liaskos" target="_blank" class="fab fa-github" rel="noreferrer">
          Github
        </a>
      </li>
      <li>
        <a href="https://bitbucket.org/stavros_liaskos/" target="_blank" class="fab fa-bitbucket" rel="noreferrer">
          Bitbucket
        </a>
      </li>
      <li>
        <a href="https://codepen.io/stavros-liaskos/#" target="_blank" class="fab fa-codepen" rel="noreferrer">
          Codepen
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/stavros-liaskos-66166094/" target="_blank" class="fab fa-linkedin"
           rel="noreferrer">LinkedIn
        </a>
      </li>
      <li>
        <a href="https://www.xing.com/profile/Stavros_Liaskos" target="_blank" class="fab fa-xing" rel="noreferrer">
          Xing
        </a>
      </li>
      <li>
        <a href="mailto:hello@stavrosliaskos.com" target="_blank" class="fab fas fa-envelope">
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
        white-space: nowrap;
        overflow: hidden;
        text-indent: -9999px;

        &:before {
          float: left;
          text-indent: 0;
        }
      }
    }
  }
</style>
