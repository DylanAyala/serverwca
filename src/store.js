import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import UserStore from "./store/userStore"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        UserStore: UserStore,
    },
    plugins: [
        createPersistedState({
            key: 'wcaserver',
            paths: ['UserStore'],
            reducer: state => (
                {
                    auth: {
                        access_token: state.UserStore.access_token,
                        me: state.UserStore.me
                    }
                })
        })
    ]
})
