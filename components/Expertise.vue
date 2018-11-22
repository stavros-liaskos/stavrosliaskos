<template>
  <div id="expertise" class="expertise section z-3">
    <headline-animated
      :class="['m-b-4']"
      :content="expetiseMainContent.title"
    />

    <p class="m-b-6">{{ expetiseMainContent.desc }}</p>

    <div v-if="expertiseCards.length" class="expertise-card-container">
      <expertise-card
        v-for="(expertiseCard, index) in expertiseCards"
        :options="expertiseCard"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import ExpertiseCard from '~/components/ExpertiseCard.vue'
import HeadlineAnimated from '~/components/HeadlineAnimated'
import {
  expertiseCards,
  expetiseMainContent
} from '~/assets/data/expertise.json'

export default {
  components: {
    ExpertiseCard,
    HeadlineAnimated
  },

  data() {
    return { expertiseCards, expetiseMainContent }
  }
}
</script>

<style lang="scss">
.expertise {
  text-align: center;

  .expertise-card-container {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
}
</style>
