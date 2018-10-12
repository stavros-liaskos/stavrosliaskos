<template>
  <div class="expertise-card one-third">
    <i :class="[icon]"/>
    <h2 class="h1">{{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
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

  .fas {
    font-size: $expertise_icons_size;
    color: $expertise_icons_color;
  }
}

@include breakpoint($breakpoint_screen_md) {
  .one-third {
    max-width: 33%;
  }
}
</style>
