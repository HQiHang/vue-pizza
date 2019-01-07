// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from "./routes"
import { store } from './store/store'
import axios from 'axios'

Vue.config.productionTip = false;

Vue.use(VueRouter);
axios.defaults.baseURL = "https://wd5057618481bdyszv.wilddogio.com/";

const router = new VueRouter({
  routes,
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
