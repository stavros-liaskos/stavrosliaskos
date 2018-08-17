<template>
  <div id="description" class="description section">
    <h1 class="desc-title">Hi, I'm Stavros.</h1>
    <h2 class="desc-title h1">I design & build</h2>

    <vue-typer v-bind="{text: typedTxt}" initial-action='erasing'></vue-typer>


    <div class="learn-more text-center">
      <a href="#" v-scroll-to="'#expertise'" class="scroll-promt">
        Learn more about what I do<br>
      </a>
      <a href="#" v-scroll-to="'#expertise'" class="dis-txt p-2 fas fa-arrow-down bounce h4"></a>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      typedTxt() {
        return ['websites', 'applications', 'user interfaces'];
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/styles';

  .vue-typer {
    display: block;
    @extend .h1;
    @extend .bg-dark;

    .custom.char {
      &.typed {
        @extend .h1;
      }

      &.selected {
        @extend .h1;
        background: $color_medium_grey;
        color: $text_dark;
      }
    }

    .custom.caret {
      @extend .h1;
      background-color: $bg_light;
    }
  }

  .description {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh; // because .section uns  ets height for mobile

    .learn-more {
      position: absolute;
      bottom: 75px;
      width: 100%;
    }

    .fas {
      color: $link_dark;
    }

    .scroll-promt {
      display: none;
    }

  }

  @include breakpoint($breakpoint_screen_sm) {
    .description {
      text-align: center;

      .desc-title {
        margin: 0 $space_2;
      }

      .scroll-promt {
        display: inline;
      }
    }
  }
</style>
