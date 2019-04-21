<template lang="pug">
  .nav__wrapper
    Button.nav__button(v-on:welcome="sayHi")
    nav.nav(v-bind:class="{ testes : isHidden }")
      ul.nav__list
        li.nav__list-item(v-for="item in navs")
          a.nav__link(href='#') {{ item.key }}

</template>

<style lang="stylus">
  .nav
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #444444;

  .nav__list
    margin: 0 auto;
    padding: 60px 10px;
    list-style-type: none;

  .nav__link
    font-family: 'GothamPro', sans-serif;
    font-size: 25px;
    letter-spacing: 0.5px;
    text-align: left;
    text-decoration: none;
    color: #b0a590;
    display: block;
    padding: 15px;

  .testes
    display: none;
    visibility: hidden;

</style>

<script>
  import Button from '@/components/Button.vue'

  const navigation = [
    { key: 'Главная' },
    { key: 'Акции' },
    { key: 'События' },
    { key: 'Банкеты' },
    { key: 'Меню' },
    { key: 'О нас' }
  ]

  export default {
    name: 'Navigation',
    components: {
      Button
    },
    data: () => {
      return {
        navs: navigation,
        isHidden: true
      }
    },
    methods: {
      sayHi: function() {
        this.isHidden = !this.isHidden
      }
    }
  }
</script>