import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Verify from "./views/Verify.vue";
import Reset from "./views/Reset.vue";
import Dashboard from "./views/Dashboard.vue";
import Redeem from "./views/Redeem.vue";
import Transfer from "./views/Transfer.vue";
import Profile from "./views/Profile.vue";
import Merchant from "./views/Merchant.vue";
import Voucher from "./views/Voucher.vue";
import OfferSet from "./views/OfferSet.vue";
import UpdatePin from "./views/UpdatePin.vue";
import History from "./views/History.vue";
Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "login",
            alias: "/login",
            component: Login,
            meta: {
                public: true, // Allow access to even if not logged in
                onlyWhenLoggedOut: true
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                public: true, // Allow access to even if not logged in
                onlyWhenLoggedOut: true
            }
        },
        {
            path: "/verify/:key",
            name: "verify",
            component: Verify,
            meta: {
                public: true, // Allow access to even if not logged in
                onlyWhenLoggedOut: true
            }
        },
        {
            path: "/reset/:uid/:token",
            name: "reset",
            component: Reset,
            meta: {
                public: true, // Allow access to even if not logged in
                // onlyWhenLoggedOut: true
            }
        },
        {
            path: "/updatePin",
            name: "updatePin",
            component: UpdatePin
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/redeem",
            name: "redeem",
            component: Redeem
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
            path: "/offerSet/:key",
            name: "offerSet",
            component: OfferSet
        },
        {
            path: "/history",
            name: "history",
            component: History
        }

    ]
});