import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import { api } from "boot/axios";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      stores: [],
    },

    getters: {
      getStores: (state) => state.stores,
    },

    mutations: {
      setStores: (state, items) => {
        state.stores = items;
      },
    },

    actions: {
      loadStores({ commit }) {
        api
          .get(
            "https://demoapi.thedenstore.com/api/service?Request=Stores&Language=en-us"
          )
          .then((response) => response.data)
          .then((items) => {
            commit("setStores", items);
          });
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
