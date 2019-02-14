<template>
  <div id="portfolio" class="portfolio section z-3">
    <headline-animated
      :class="['text-center p-b-6']"
      :content="'I have worked at:'"
    />

    <div v-if="projectCards.length" class="project-cards-container">
      <project-card
        v-for="(projectCard, index) in projectCards.filter(card => card.active)"
        :key="index"
        :img-url="projectCard.imgUrl"
        :link="projectCard.link"
        :title="projectCard.title"
        :tech="projectCard.tech"
        :desc="projectCard.desc"
        :active="projectCard.active"
      />
    </div>
  </div>
</template>

<script>
import HeadlineAnimated from '~/components/HeadlineAnimated'
import ProjectCard from '~/components/ProjectCard.vue'
import projectCards from '~/assets/data/projectCards.json'

export default {
  components: {
    HeadlineAnimated,
    ProjectCard
  },

  data() {
    return projectCards
  }
}
</script>

<style lang="scss">
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
