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
import VeeValidate from "vee-validate";
Vue.use(VeeValidate, {
    events: 'change|blur|custom'
});
VeeValidate.Validator.extend("verify_password", {
    getMessage: field => ``,
    validate: value => {
        var strongRegex = new RegExp("^(.{6,})$");
        return strongRegex.test(value);
    }
});
VeeValidate.Validator.extend("verify_number", {
    getMessage: field => ``,
    validate: value => {
        var numRegex = new RegExp('^\\d+$');
        return numRegex.test(value);
    }
});

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
    },
    router
});
// import "../src/assets/js/webflow.js";
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//     const isPublic = to.matched.some(record => record.meta.public);
//     const onlyWhenLoggedOut = to.matched.some(
//         record => record.meta.onlyWhenLoggedOut
//     );
//     const loggedIn = store.getters.isLoggedIn;
//     if (!isPublic && !loggedIn) {
//         return next({
//             path: "/login",
//             query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
//         });
//     }

//     // Do not allow user to visit login page or register page if they are logged in
//     if (loggedIn && onlyWhenLoggedOut) {
//         if (isPublic) {
//             return next("/dashboard");
//         }
//         return next("/");
//     }

//     next();
// });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");