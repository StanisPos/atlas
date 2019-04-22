<template lang="pug">
  .button(v-on:click="$emit('welcome'), isActive = !isActive")
    .button__icon(v-bind:class="{ open : isActive }")


</template>

<style lang="stylus">
  .button
    position: relative;
    height:100px;
    width:100px;
    transform: scale(0.3);
    z-index: 100;

    &:hover
      cursor: pointer;
    
  
  .button__icon
    height: 10px;
    width:100px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50px;
    background-color: #4A2545;
    transform: translate(-50%,-50%) rotate(0deg);
    transition: all ease 0.5s;
    &::before,&::after
      content:"";
      position: absolute;
      height: inherit;
      border-radius: inherit;
      background-color: inherit;
      margin: auto;
      width: 50%;
      transition: all ease 0.5s;
    
    &::before
      top: -20px;
      left: 0;
      transform-origin: left;
    
    &::after
      bottom:-20px;
      right: 0;
      transform-origin: right;

  .open
    background-color: red;
    transform:translate(-50%,-50%) rotate(135deg);
    &::before
      top:0;
      transform: translateX(100%) rotate(-90deg);
    
    &::after
      bottom:0;
      transform: translateX(-100%) rotate(-90deg);

</style>

<script>
  // let burger = document.querySelector('.burger');
  // burger.addEventListener('click', function(e) {
  //   burger.classList.toggle('active');
  // });


  export default {
    name: 'Button',
    data: () => {
      return {
        isActive: false
      }
    }
  }
</script>