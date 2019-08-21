import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    logged_in: "",
    user: {
      id: 1,
      email: "ozigbochidozie@gmail.com",
      phone: "+2348130639935",
      first_name: "ozigbo",
      last_name: "Chidozie"
    },
    user_profile: {
      user_id: 1,
      email: "ozigbochidozie@gmail.com",
      phone: "+2348130639935",
      eth_public_key: "0x13D3B1c681D306ae871656dBAe3575B07aed749D",
      extra_points: "0.000000",
      memberships: [
        {
          id: 1,
          identifier: "+120000001",
          points: "1000.000000",
          rate: "1.000000",
          profile: 1,
          service: 1,
          service_title: "Midas Touch Drycleaners"
        },
        {
          id: 2,
          identifier: "+120000001",
          points: "1000.000000",
          rate: "1.000000",
          profile: 1,
          service: 1,
          service_title: "Midas Touch Drycleaners"
        },
        {
          id: 1,
          identifier: "+120000001",
          points: "1000.000000",
          rate: "1.000000",
          profile: 1,
          service: 1,
          service_title: "Midas Touch Drycleaners"
        },
        {
          id: 1,
          identifier: "+120000001",
          points: "1000.000000",
          rate: "1.000000",
          profile: 1,
          service: 1,
          service_title: "Midas Touch Drycleaners"
        },
        {
          id: 1,
          identifier: "+120000001",
          points: "1000.000000",
          rate: "1.000000",
          profile: 1,
          service: 1,
          service_title: "Midas Touch Drycleaners"
        },
        {
          id: 1,
          identifier: "+120000001",
          points: "1000.000000",
          rate: "1.000000",
          profile: 1,
          service: 1,
          service_title: "Midas Touch Drycleaners"
        }
      ],
      services: [
        {
          id: 1,
          title: "Midas Touch Drycleaners",
          description: "the no 1 dry cleaning service in the world",
          service_type: "drycleaning",
          country: "NG",
          is_opened: true,
          api_url: "https://google.com"
        },
        {
          id: 2,
          title: "Marketsquare",
          description: "the no 1 supermarket in the world",
          service_type: "sales",
          country: "NG",
          is_opened: true,
          api_url: "https://google.com"
        }
      ]
    }
  },
  mutations: {
    updateStatus(state, status) {
      state.logged_in = status;
    },

    updateToken(state, token) {
      // console.log(token);
      state.token = token;
    },

    logout(state) {
      state.logged_in = false;
      state.token = "";
    }
  },
  actions: {
    login({ commit }, credentials) {
      let req = {
        what: "login",
        data: credentials
      };

      return new Promise((resolve, reject) => {
        Vue.prototype.$request
          .makePostRequest(req)
          .then(response => {
            commit("updateStatus", true);
            commit("updateToken", response.data.key);

            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout({ commit }, credentials) {
      let req = {
        what: "logout"
      };

      return new Promise((resolve, reject) => {
        Vue.prototype.$request
          .makePostRequest(req)
          .then(response => {
            commit("updateStatus", "");
            commit("updateToken", "");
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    profile({ commit }, credentials) {
      let req = {
        what: "profile",
        params: credentials
      };
      req.useToken = this.state.token;
      return new Promise((resolve, reject) => {
        Vue.prototype.$request
          .makeGetRequest(req)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },

  getters: {
    profile: state => state.user_profile,
    user: state => state.user
  },

  plugins: [createPersistedState()]
});
