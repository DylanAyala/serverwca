import {SET_LOADING_USER, SET_TOKEN, SET_ME} from "@/store/user-mutations-types";
import UserProvider from "../providers/UserProvider"
import router from "../router"
import jwt_decode from 'jwt-decode'
import graphqlClient from "../apollo"

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
        },
        isAuth: (state) => {
            return (state.access_token) ? true : false
        },
    },
    actions: {
        login({commit}, data) {
            commit(SET_LOADING_USER, true)
            commit(SET_TOKEN, '')
            UserProvider.auth(data.username, data.password).then((response) => {
                commit(SET_TOKEN, response.data.auth.token)
                commit(SET_ME, response.data.auth.user)
                console.log(response.data.auth.user)
                commit(SET_LOADING_USER, false)
                router.push('/')
            }).catch((error) => {
                console.log(error)
                commit(SET_LOADING_USER, false)
            })
        },
        checkAuth: ({state, dispatch}) => {
            if (state.access_token) {
                let payload = jwt_decode(state.access_token)
                if (payload.exp) {
                    let dateNow = new Date();
                    let dateToken = new Date(payload.exp * 1000)
                    console.log(dateToken)
                    if (dateNow > dateToken) {
                        console.log("Token expire. Logout.")
                        dispatch('logout')
                    }
                }
            }
        },
        logout({commit}) {
            commit(SET_TOKEN, '')
            commit(SET_ME, [])
            graphqlClient.resetStore()
            router.push('/login')
        },
    },
    mutations: {
        [SET_LOADING_USER](state, data) {
            state.loadingUser = data
        },
        [SET_TOKEN](state, data) {
            state.access_token = data
        },
        [SET_ME](state, data) {
            state.me = data
        }
    }
}