import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from "axios";
import VueAxios from "vue-axios";
import { ClientTable } from "vue-tables-2";
import Request from "./Request";
import io from "socket.io-client";
import swal from "sweetalert2";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import InfiniteLoading from "vue-infinite-loading";

Vue.use(ClientTable);
Vue.use(VueAxios, axios);
Vue.use(InfiniteLoading);

Vue.component("v-select", vSelect);
var socket = io("localhost:3300");

Vue.prototype.$socket = socket;
Vue.prototype.$request = Request;
Vue.prototype.$swal = swal;

// stylesheet
import "../src/assets/css/normalize.css";
import "../src/assets/css/webflow.css";
import "bootstrap";
import "jquery";
import Popper from "popper.js";
global.Popper = Popper;
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/bootstrap-extended.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/components.min.css";
import "../src/assets/css/vertical-content-menu.min.css";
import Toasted from "vue-toasted";
// javascript
Vue.use(Toasted, {
  duration: 9000,
  theme: "bubble",
  type: "success",
  iconPack: "fontawesome",
  action: {
    text: "X",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  }
});
// import "../src/assets/js/webflow.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
