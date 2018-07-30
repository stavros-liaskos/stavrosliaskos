<template>
  <div>
    <!--no-ssr explained: https://github.com/creotip/vue-particles/issues/28-->
    <no-ssr>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.2"
        :particlesNumber="30"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </no-ssr>
  </div>
</template>

<style lang="scss" scoped>
  #particles-js {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
