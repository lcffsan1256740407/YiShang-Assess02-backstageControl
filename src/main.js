//引入基础Vue
import Vue from 'vue'
import App from './App.vue'
//引入Vuex
import store from "./store"
//引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from "./router"

// 引入Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入封装的axios
import {Service} from "./service";

new Vue({
  el:"#demo",
  components:{App},
  render: createElement => createElement(App),
  // Vuex
  store,
  // VueRouter
  router,
  mounted(){
    Vue.prototype.$axios = Service
  }
})
