<template>
  <a href="/" :style="[property]"><h4 class="link">Go back to home <i class="fas fa-undo-alt"></i></h4></a>
</template>

<script>
  export default {
    props: {
      property: String
    }
  };
</script>
