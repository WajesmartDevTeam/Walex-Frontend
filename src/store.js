import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: "",
        logged_in: "",
        user: {},
        user_profile: {},
        services: []
    },
    mutations: {
        updateStatus(state, status) {
            state.logged_in = status;
        },
        updateUser(state, user) {
            state.user = user
        },
        updateUsername(state, user) {
            state.user.first_name = user.first_name;
            state.user.last_name = user.last_name;
        },

        updateToken(state, token) {
            // console.log(token);
            state.token = token;
        },
        updateProfile(state, profile) {
            state.user_profile = profile;
        },
        updateServices(state, services) {
            state.services = services
        },
        updatePin(state, is_transactioncode) {
            state.user.is_transactioncode = is_transactioncode
        }


    },
    actions: {
        login({ commit, dispatch }, credentials) {
            let req = {
                what: "login",
                params: credentials
            };
            req.useToken = false;
            return new Promise((resolve, reject) => {
                Vue.prototype.$request
                    .makeGetRequest(req)
                    .then(response => {
                        // console.log(response.data)
                        commit("updateStatus", true);
                        commit("updateUser", response.data.data);
                        commit("updateToken", response.data.token);
                        this.dispatch("services");
                        resolve(response.data.data);
                    })
                    .catch(error => {
                        reject(error);
                        // console.log(error)
                    });
            });
        },
        services({ commit }) {
            let req = {
                what: "services"
            };
            req.useToken = false;
            return new Promise((resolve, reject) => {
                Vue.prototype.$request
                    .makeGetRequest(req)
                    .then(response => {
                        console.log(response.data)

                        commit("updateServices", response.data.data);

                        resolve(response.data.data);
                    })
                    .catch(error => {
                        reject(error);
                        // console.log(error)
                    });
            });
        },
        profile({ commit }, credentials) {
            let req = {
                what: "profile",
                id: credentials
            };
            req.useToken = this.state.token;
            return new Promise((resolve, reject) => {
                Vue.prototype.$request
                    .makeGetRequest(req)
                    .then(response => {
                        // console.log(response.data)
                        commit("updateProfile", response.data.data[0])
                        resolve(response.data.data[0]);
                    })
                    .catch(error => {
                        // console.log(error)
                        reject(error);
                    });
            });
        },
        updatePin({ commit }, credentials) {
            let req = {
                what: "pin",
                id: this.state.user.id,
                data: credentials
            };
            req.useToken = true;
            return new Promise((resolve, reject) => {
                Vue.prototype.$request
                    .editItem(req)
                    .then(response => {
                        // console.log(response.data)
                        commit("updatePin", true)
                        resolve(response.data.message);
                    })
                    .catch(error => {
                        reject(error);
                        // console.log(error)
                    });
            });
        },
        updateUsername({ commit }, credentials) {
            commit("updateUsername", credentials);
        },
        logout({ commit }, credentials) {
            let req = {
                what: "logout"
            };

            return new Promise((resolve, reject) => {
                commit("updateStatus", "");
                commit("updateToken", "");
                resolve("");
            });
        },

    },

    getters: {
        isLoggedIn: state => state.logged_in,
        profile: state => state.user_profile,
        user: state => state.user,
        token: state => state.token,
        services: state => state.services
    },

    plugins: [createPersistedState()]
});