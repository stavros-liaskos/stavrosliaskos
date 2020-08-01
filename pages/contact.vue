<template>
  <div class="contact z-3 section">
    <headline-animated :class="['text-center']" :content="'Let\'s talk'" />

    <p class="desc text-center">
      Do you want to tell me something amazing? Do you have any questions? Don't
      hesitate to contact me at my social profiles
    </p>
  </div>
</template>

<script>
import HeadlineAnimated from '~/components/HeadlineAnimated'

export default {
  components: {
    HeadlineAnimated,
  },
}
</script>

<style lang="scss">
@import '../assets/styles';
.contact {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .desc {
    white-space: pre-line;
  }

  ul {
    display: flex;
    justify-content: space-around;

    .fab {
      display: inline-block !important;
      cursor: pointer;
      font-size: 3rem;
      width: 30px;
    }
  }
}
</style>
