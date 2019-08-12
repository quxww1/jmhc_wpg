import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
App.mpType = "app";
Vue.prototype.globalData = {
  config: {},
  userInfo:{}
};
Vue.prototype.$site = "https://cdn.jumihc.com/static/unzip_WechatMiniProgram";
const app = new Vue(App);
app.$mount();

