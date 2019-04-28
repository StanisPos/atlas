<template lang="pug">
    .main__img-wrapper
      .main__img-mask
      .main__img(v-bind:style="{ backgroundImage: 'url(' + require('../assets/image_produciton/landscape/' + img)+ ')' }")
      svg.main__svg-line#svg1(width="200" height="5")
        path(stroke="white" stroke-width="3" fill="#444444" stroke-dasharray="200" stroke-dashoffset="0" d="M 0,0 L 200,0")
          animate(v-on:endEvent='proverka' attributeName="stroke-dashoffset" begin="1s" repeatCount="1" values="200;0;" dur="5s" fill="freeze" calcmode="linear" restart="always")  

</template>

<style lang="stylus">
  .main__img-wrapper
    position: relative;
    height: 60vh;
    z-index: -1;

  .main__img-mask
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 91vh;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.1);
    &::after
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      border: 4px double rgba(255, 255, 255, 0.25);

  .main__img
    display: block;
    width:100%;
    height: 91vh;
    // background-image: url('../assets/image_produciton/landscape/');
    background-repeat: no-repeat;
    background-position: 50% 17%;
    background-size: cover;
  
  .main__svg-line
    z-index: 1000
    position: absolute;
    top: 13%;
    right: 19%;

</style>

<script>
  const arrayMainImages = [
    'main-room.webp', 'main-room2.webp', 'main-room3.webp', 'main-room4.webp'
  ]

  export default {
    name: 'MainImage',
    data: function() {
      return {
        img: arrayMainImages[0]
      }
    },
    methods: {
      proverka: function() {
        let animater = document.querySelector('animate');
        animater.beginElement()
      }
    },
    mounted() {
      // this.test(function() {
      //   animate.beginElement()
      // });

    }
  }
</script>