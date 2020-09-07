import {SET_LOADING_USER} from "@/store/user-mutations-types";
import UserProvider from "../providers/UserProvider"

export default {
    state: {
        access_token: null,
        loadingUser: false,
        me: {
            id: null,
            username: null
        }
    },
    getters: {
        getToken: (state) => {
            return state.access_token
        },
        getLoadingUser: (state) => {
            return state.loadingUser
        },
        getMe: (state) => {
            return state.me
        }
    },
    actions: {
        login({commit}, data) {
            commit(SET_LOADING_USER, true)
            UserProvider.auth(data.username, data.password).then((response) => {
                console.log(response)
                commit(SET_LOADING_USER, false)
            }).catch((error) => {
                console.log(error)
                commit(SET_LOADING_USER, false)
            })
        }
    },
    mutations: {
        [SET_LOADING_USER](state, data) {
            state.loadingUser = data
        }
    }
}