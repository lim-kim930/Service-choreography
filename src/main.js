import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';
import router from "./router";

Vue.use(VueRouter);
Vue.use(TDesign);
Vue.config.productionTip = false;

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
