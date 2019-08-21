import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Dashboard from "./views/Dashboard.vue";
import Exchange from "./views/Exchange.vue";
import Transfer from "./views/Transfer.vue";
import Profile from "./views/Profile.vue";
import Merchant from "./views/Merchant.vue";
import Voucher from "./views/Voucher.vue";
import OfferSet from "./views/OfferSet.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      alias: "/login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/exchange",
      name: "exchange",
      component: Exchange
    },
    {
      path: "/transfer",
      name: "transfer",
      component: Transfer
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/merchant",
      name: "merchant",
      component: Merchant
    },
    {
      path: "/voucher",
      name: "voucher",
      component: Voucher
    },
    {
      path: "/offerSet",
      name: "offerSet",
      component: OfferSet
    }
  ]
});
