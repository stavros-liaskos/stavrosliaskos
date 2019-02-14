<template>
  <div class="expertise-card one-third">
    <component :is="iconType">
      {{ options.title }}
    </component>
    <h2 class="h1">
      {{ options.title }}
    </h2>
    <p>{{ options.desc }}</p>
  </div>
</template>

<script>
import IconChartLine from '~/components/icons/IconChartLine'
import IconCode from '~/components/icons/IconCode'
import IconTachometer from '~/components/icons/IconTachometer'
import IconUser from '~/components/icons/IconUser'
import IconLightbulb from '~/components/icons/IconLightbulb'
import IconSpaceShuttle from '~/components/icons/IconSpaceShuttle'

export default {
  components: {
    IconChartLine,
    IconCode,
    IconTachometer,
    IconUser,
    IconLightbulb,
    IconSpaceShuttle
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    iconType() {
      return this.options.svg
    }
  }
}
</script>

<style lang="scss">
$expertise_icons_color: $color_primary;

.one-third {
  width: 100%;
}

.expertise-card {
  text-align: center;

  * {
    padding: $space_2;
  }

  .svg-inline--fa {
    width: 70px;
    height: 70px;
    color: $expertise_icons_color;
  }
}

@include breakpoint($breakpoint_screen_md) {
  .one-third {
    max-width: 33%;
  }
}
</style>
