<style scoped>

  /* #app{
    background: url("../static/img/bg.png") no-repeat!important;
    background-size: contain;
    width: 100%;
    overflow: hidden;
  } */
  html,body,#app{
    width: 100%;
    height: 100%;
    /*width:1920px;*/
     /*width:4864px;height:1536px; */
     /* height: 720px; */
    /* overflow: hidden; */
    /* width: 100%; */
    background: url(../static/img/bg.png) no-repeat;
    background-size: 100% 100%;
    /* padding-top: 20px; */
  }

</style>
<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>

</script>
