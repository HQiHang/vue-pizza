<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家来到我的餐厅！</h1>
        <h2>这里有你最爱吃的pizza！</h2>
        <button class="btn btn-success" @click="goto()">点餐</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      goto(){
        this.$router.push("/menu");
      }
    }
  }
</script>

<style scoped>
  #home{
    background: url("../../src/assets/pizza.jpg") no-repeat;
    background-size: cover;
    padding: 10%;
    margin-top: 20px;
  }
  h1, h2{
    padding: 20px 0;
  }
  .background{
    background-color: rgba(238, 238, 238, 0.8);
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
