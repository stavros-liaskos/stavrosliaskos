<template>
  <div class="project-card">
    <a
      :href="[link]"
      target="_blank"
      rel="noopener noreferrer">
      <div class="img-wrapper">
        <img
          v-lazy="`${imgUrl}`"
          :alt="[title]"
          class="project-card-img">
      </div>

      <div class="texts-container">
        <div class="tech-stack-container">
          <p class="m-b-2">{{ tech }}</p>
        </div>

        <div class="title-container">
          <h2 class="text-dark">
            <icon-dollar/>
            {{ title }} </h2>
        </div>

        <div class="desc-container">
          <p class="text-dark">{{ desc }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import IconDollar from '~/components/icons/IconDollar'

export default {
  components: {
    IconDollar
  },
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    tech: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
// Card spacing
$card_height: 350px;
$card_bg_color: $color_white;
$anim-time: 0.3s;
$img_wrapper_height: 240px;
$text_container_height: $card_height - $img_wrapper_height;
$tech_stack_height: 20px;

.project-card {
  position: relative;
  width: 100%;
  max-width: 300px;
  max-height: $card_height;
  background: $card_bg_color;
  margin: 0 $space_2 $space_7;
  box-shadow: 5px 5px 3px #676565;
  border: 1px solid $color_dark_grey;

  // paint all letters to white to create visual effect in cards
  * {
    transition: all $anim-time ease-in-out 0s;
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

      .svg-inline--fa {
        width: 10px;
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
      opacity: 0.6;
    }

    .title-container {
      .svg-inline--fa {
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
