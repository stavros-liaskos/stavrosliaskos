<template>
  <ul>
    <li>
      <a
        href="https://github.com/stavros-liaskos"
        target="_blank"
        aria-label="github"
        rel="noopener noreferrer"
      >
        <icon-github />
      </a>
    </li>
    <li>
      <a
        href="https://bitbucket.org/stavros_liaskos/"
        target="_blank"
        aria-label="bitbucket"
        rel="noopener noreferrer"
      >
        <icon-bitbucket />
      </a>
    </li>
    <li>
      <a
        href="https://codepen.io/stavros-liaskos/#"
        target="_blank"
        aria-label="codepen"
        rel="noopener noreferrer"
      >
        <icon-codepen />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/stavros-liaskos/"
        target="_blank"
        aria-label="linkedin"
        rel="noopener noreferrer"
      >
        <icon-linkedin />
      </a>
    </li>
    <li>
      <a
        href="https://www.xing.com/profile/Stavros_Liaskos"
        target="_blank"
        aria-label="xing"
        rel="noopener noreferrer"
      >
        <icon-xing />
      </a>
    </li>
    <li>
      <a
        href="mailto:hello@stavrosliaskos.com"
        target="_blank"
        aria-label="email"
      >
        <icon-mail />
      </a>
    </li>
  </ul>
</template>

<script>
import IconGithub from '~/components/icons/IconGithub.vue'
import IconBitbucket from '~/components/icons/IconBitbucket'
import IconCodepen from '~/components/icons/IconCodepen'
import IconLinkedin from '~/components/icons/IconLinkedin'
import IconXing from '~/components/icons/IconXing'
import IconMail from '~/components/icons/IconMail'

export default {
  components: {
    IconGithub,
    IconBitbucket,
    IconCodepen,
    IconLinkedin,
    IconXing,
    IconMail
  }
}
</script>

<style lang="scss">
.social-links {
  display: none;
}

@include breakpoint($breakpoint_screen_md) {
  .social-links {
    display: block;
    position: absolute;
    bottom: $space_8;
    left: 0;
    text-align: center;
    margin-left: $space_2;

    .svg-inline--fa {
      width: 30px;
      animation: pulse-color 12s infinite alternate;
      margin-bottom: $space_1;
      cursor: pointer;
      @include zoom(
        $navi_toolbar_initial_icons_size,
        $navi_toolbar_final_icons_size
      );
    }
  }
}
</style>
