/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");

// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import { store } from "@/store/index";

// Vue.config.productionTip = false;

// new Vue({
//   el: "#app",
//   store,
//   router,
//   render: h => h(App)
// }).$mount("#app");
