<template>
  <div id="app">
    <div class="container">
      <appHeader></appHeader>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container router">
      <div class="row">
        <div class="col-sm-12 col-md-3">
          <router-view name="contact"></router-view>
        </div>
        <div class="col-sm-12 col-md-3">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-3">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-12 col-md-3">
          <router-view name="ordering"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>
  .router{
    margin: 20px auto;
  }
</style>
