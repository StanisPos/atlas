<template lang="pug">
  section.title-block
    .title-block__wrapper
      h1.title-block__title.visually-hidden Кафе европейской кухни Атлас
      p.title-block__text Уютное, необычное и гостеприимное кафе
      .title-block__button-wrapper
        button.title-block__button.title-block__button--left(v-on:click="$emit('changeSlideToLeft')")
        button.title-block__button.title-block__button--right(v-on:click="$emit('changeSlideToRight')")

    .title-block__footer
      p.title-block__footer-text Кафе в самом центре Воронежа
      a(href="#").title-block__footer-link Смотреть »


</template>

<style lang="stylus">
  .title-block
    height: 31vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  .title-block__wrapper
    flex-grow: 1;
    padding: 0 12px;
    padding-top: 10px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);

  .title-block__text
    font-family: 'Playfair', serif;
    font-size: 24px;
    text-align: left;
    margin: 0;
    margin-bottom: 15px;

  .title-block__button-wrapper
    display: flex;
    height: 35px;
    align-items: center;

  .title-block__button
    width: 0;
    height: 0;
    padding: 0;
    background-color: transparent;
    border: 7px solid transparent;
    outline: none;
    &--left
      margin-right: 20px;
      border-right: 7px solid #000000;
    &--right
      border-left: 7px solid #000000;
    &:active
      transform: scale(0.9);

  .title-block__footer
    flex-grow: 0.8;
    padding: 0 10px;
    padding-top: 15px;
    background-color: #000000;

  .title-block__footer-text
    font-family: 'Playfair', serif;
    font-size: 16px;
    text-transform: uppercase;
    text-align: left;
    color: #999999;
    margin: 0;
    margin-bottom: 15px;

  .title-block__footer-link
    display: block;
    font-family: 'Playfair', serif;
    font-size: 13px;
    text-align: left;
    color: #f1f1f1;



</style>

<script>
  export default {
    name: 'TitleBlock',
    data: function() {
      return {
        methods: {
          changeImg: function() {
            alert('привит кит')
          }
        }
      }
    }
  }
</script>