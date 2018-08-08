<template>
  <h2 class="h1" v-on:mouseover="animate">{{content}}</h2>
</template>

<script>
  export default {
    props: {
      content: String
    },

    methods: {
      animate(e) {
        const el = e.target;
        el.classList.add('blast');
        el.addEventListener('animationend', () => {
          el.classList.remove('blast');
        }, false);
      }
    }
  };
</script>
