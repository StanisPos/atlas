<template>
  <div id="app">
    <MainSidebar />

  </div>
</template>
<script>

import MainSidebar from '@/modules/MainSidebar'

export default {
  name: 'basic-template',
  components:{
    MainSidebar
  }
}
</script>

<style lang="stylus">
  @font-face 
    font-family: 'GothamPro';
    font-style: normal;
    font-weight: 400;
    src: url('/assets/fonts/GothamProLight.woff') format('woff'),
          url('/assets/fonts/GothamPro-Light.ttf') format('ttf')

  body
    width: 100%;
    margin: 0;
    padding: 0;

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50

  #nav
    padding 30px
    a
      font-weight bold
      color #2c3e50
      &.router-link-exact-active
        color #42b983

  .visuallyHidden
    position: absolute;
    left: -9999px;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;

</style>
