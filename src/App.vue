<template>
  <div id="app">
    <MainSidebar />
    <Main />
      <div>
        <p>
          {{  message  }}
        </p>
      </div>
  </div>
</template>
<script>

import MainSidebar from '@/modules/MainSidebar'
import Main from '@/modules/Main'
import Json from './json.json'

export default {
  name: 'basic-template',
  data () {
    return {
      message: Json
    }
  },
  components:{
    MainSidebar,
    Main
  }
}
</script>

<style lang="stylus">
  @import '/assets/normalize.styl'

  html 
    box-sizing: border-box;
  
  *,
  *::before,
  *::after
    box-sizing: inherit;

  body
    width: 100%;
    margin: 0;
    padding: 0;

  img
    max-width: 100%;

  a
    text-decoration: none;

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50

  @font-face 
    font-family: 'CirceBold';
    font-style: normal;
    font-weight: 800;
    src: url('~@/assets/fonts/Circe-Bold.woff') format('woff'),
          url('~@/assets/fonts/Circe-Bold.ttf') format('ttf')

  @font-face 
    font-family: 'CirceLight';
    font-style: normal;
    font-weight: 400;
    src: url('~@/assets/fonts/Circe-Light.woff') format('woff'),
          url('~@/assets/fonts/Circe-Light.ttf') format('ttf')

  @font-face 
    font-family: 'PlayfairBold';
    font-style: normal;
    font-weight: 700;
    src: url('~@/assets/fonts/playfair-display-v14-cyrillic-900.woff') format('woff'),
          url('~@/assets/fonts/playfair-display-v14-cyrillic-900.woff2') format('woff2')

  @font-face 
    font-family: 'Playfair';
    font-style: normal;
    font-weight: 400;
    src: url('~@/assets/fonts/playfair-display-v14-cyrillic-regular.woff') format('woff'),
          url('~@/assets/fonts/playfair-display-v14-cyrillic-regular.woff2') format('woff2')


  .visually-hidden
    position: absolute;
    left: -9999px;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;

</style>
