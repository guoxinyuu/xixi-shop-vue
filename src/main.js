import Vue from 'vue'
import App from './App.vue'
/**
 * 注册第三方组件
 */
// 引入 vue-router 及路由配置
import Router from "vue-router";
import router from "./router";
Vue.use(Router);
// Vuex Store 组件
import VuexStore from "@/utils/VuexStore.js";
Vue.prototype.$VuexStore = VuexStore;

// 引入 ElementUI 和主题样式
import ElementUI, { Option } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI); //加上{ size: "mini" }可以设定控件大小
/**
 * 注册第三方css库
 */
// 引入图标库样式
import "font-awesome/css/font-awesome.min.css";
import axios from 'axios';
Vue.prototype.$axios=axios;
Vue.prototype.$http=axios;

axios.defaults.baseURL = ''

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
