<template>
  <div class="project-card">
    <a :href="[link]" target="_blank">
      <div class="img-wrapper">
        <img class="project-card-img" v-lazy="`${imgUrl}`" v-bind:alt="[title]">
      </div>

      <div class="texts-container">
        <div class="tech-stack-container">
          <p class="m-b-2">{{tech}}</p>
        </div>

        <div class="title-container">
          <h2><i class="fas fa-dollar-sign" data-v-1c8e701e=""></i> {{title}} </h2>
        </div>

        <div class="desc-container">
          <p>{{desc}}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      imgUrl: String,
      title: String,
      tech: String,
      desc: String,
      link: String
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  // Card spacing
  $card_width: 350px;
  $card_height: 350px;
  $card_bg_color: $color_white;
  $anim-time: .3s;
  $img_wrapper_height: 240px;
  $text_container_height: $card_height - $img_wrapper_height;
  $tech_stack_height: 20px;

  .project-card {
    position: relative;
    width: 100%;
    max-width: $card_width;
    min-width: calc(#{$card_width} - 100px);
    max-height: $card_height;
    background: $card_bg_color;
    margin: 0 $space_2 $space_7;
    box-shadow: 5px 5px 3px #676565;
    border: 1px solid $color_dark_grey;

    // paint all letters to white to create visual effect in cards
    * {
      transition: all $anim-time ease-in-out 0s;
      @extend .text-dark;
    }

    .img-wrapper {
      overflow: hidden;
      background: $color_light_grey;
      height: $img_wrapper_height;

      .project-card-img {
        opacity: 1;
      }
    }

    .texts-container {
      background: inherit;
      padding: $space_1 $space_2;
      width: 100%;
      height: $text_container_height;

      .tech-stack-container {
        background: $card_bg_color;
        height: $tech_stack_height;

        * {
          color: $color_dark_grey;
        }
      }

      .title-container {
        margin: $space_2 0;

        .fas {
          transition: visibility 0.5s, opacity 0.5s ease-in-out;
          visibility: hidden;
          opacity: 0;
        }
      }

      .desc-container {
        height: 0;

        * {
          opacity: 0;
        }
      }
    }

    &:hover {
      .project-card-img {
        transform: scale(1.1);
        opacity: .6;
      }

      .title-container {
        .fas {
          visibility: visible;
          opacity: 1;
        }

        h2 {
          font-size: 1.9rem;
        }
      }

      .desc-container {
        height: $space_4;

        * {
          opacity: 1;
        }
      }
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .project-card {
      .title-container {
        h2 {
          margin: 0;
        }
      }
    }
  }
</style>
