<template lang="pug">
  section.title-block
    .title-block__wrapper
      h1.title-block__title.visually-hidden Кафе европейской кухни Атлас
      b.title-block__subtitle Друзья! 
      p.title-block__text Вас приветствует «Атлас» - уютное, необычное и гостеприимное кафе в самом центре Воронежа!
      p.title-block__text «Атлас» - это кухня мира и дружная команда молодых профессионалов, любящих своё дело!

</template>

<style lang="stylus">
  .title-block
    margin: 0 20px;

  .title-block__wrapper
    padding: 10px 
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);

  .title-block__subtitle
    font-family: 'CirceLight', sans-serif;
    font-size: 18px;

  .title-block__text
    font-family: 'CirceLight', sans-serif;
    font-size: 16px;


</style>

<script>
  export default {
    name: 'TitleBlock'
  }
</script>