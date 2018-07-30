<template>
  <div id="portfolio" class="portfolio section">
    <headline-animated
      v-bind:class="['text-center p-b-6']"
      v-bind:content="'I have worked at:'"/>

    <div class="project-cards-container">

      <project-card v-for="(projectCard, index) in projectCards" v-if="projectCards.length"
                    v-bind:imgUrl="projectCard.imgUrl"
                    v-bind:link="projectCard.link"
                    v-bind:title="projectCard.title"
                    v-bind:tech="projectCard.tech"
                    v-bind:desc="projectCard.desc"
                    v-bind:key="index"
      />
    </div>
  </div>
</template>

<script>
  import HeadlineAnimated from '~/atoms/HeadlineAnimated';
  import ProjectCard from '~/organisms/ProjectCard.vue';
  import projectCards from '~/assets/data/projectCards.json';

  export default {
    components: {
      HeadlineAnimated,
      ProjectCard
    },

    data() {
      return projectCards;
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles';

  .portfolio {
    .project-cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;
    }
  }

  @include breakpoint($breakpoint_screen_md) {
    .portfolio {
      .project-cards-container {
        justify-content: space-evenly;
      }
    }
  }
</style>
