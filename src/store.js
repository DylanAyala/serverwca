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
        auth: UserStore,
    },
    plugins: [
        createPersistedState({
            key: 'wcaserver',
            paths: ['auth'],
            reducer: state => (
                {
                    auth: {
                        access_token: state.auth.access_token,
                        me: state.auth.me
                    }
                })
        })
    ]
})
