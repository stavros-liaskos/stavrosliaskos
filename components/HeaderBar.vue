<template>
  <header class="header bg-dark z-1">
    <a 
      href="/" 
      class="h2 title spin-wrapper">S T A V R <span class="spinned h2">O</span> S</a>

    <svg 
      id="logo-svg" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      x="0px" 
      y="0px" 
      viewBox="0 0 62.2 63.3" 
      xml:space="preserve" 
      style="position: absolute; top: 0px; left: 122px; height: 100%; transform: matrix(1, 0, 0, 1, 0, 0);">
      <path 
        d="M57.9,36.6L35.5,59c-2.4,2.4-6.4,2.4-8.8,0L4.3,36.6c-2.4-2.4-2.4-6.4,0-8.8L28.5,3.6c1.5-1.5,3.8-1.5,5.3,0  L58,27.8C60.3,30.2,60.3,34.2,57.9,36.6z" 
        style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 5%; stroke-miterlimit: 10;"/>
    </svg>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: $space_1;
  left: $space_1;
  overflow: hidden; // used to hide extended rectangle. TODO probably remove

  #logo-svg {
    width: 50px;
  }

  .title {
    display: block;
    font-weight: 700;
    @extend .text-light;
  }
}

@include breakpoint($breakpoint_screen_md) {
  .header {
    top: 0;
    left: $navi_toolbar_desktop_width;
    height: $space_7;
    padding-right: $space_1;
    border-radius: 0 0 10% 0;

    .title {
      padding-top: $space_4;
    }
  }
}
</style>
