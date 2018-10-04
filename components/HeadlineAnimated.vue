<template>
  <h2 
    class="h1" 
    @mouseover="animate">{{ content }}</h2>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },

  methods: {
    animate(e) {
      const el = e.target
      el.classList.add('blast')
      el.addEventListener(
        'animationend',
        () => {
          el.classList.remove('blast')
        },
        false
      )
    }
  }
}
</script>
