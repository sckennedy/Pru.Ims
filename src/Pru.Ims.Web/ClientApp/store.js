import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        paths: ['user'],
    })],

    state: {
        user: null,
        requestsInProgress: 0,
    },

    mutations: {
        requestStarting(state) {
            state.requestsInProgress++
        },
        requestCompleted(state) {
            state.requestsInProgress--
        },
        setUser(state) {
            state.user = window.user
            api.setToken(state.user.AccessToken)
        },
        setToken(state, token) {
            state.user.AccessToken = token
            api.setToken(token)
        }
    },

    getters: {
        requestInProgress(state) {
            return state.requestsInProgress > 0
        },
        isAuthenticated(state) {
            return state.user && state.user.AccessToken && state.user.AccessToken.length > 0
        },
        hasRole(state) {
            return (role) => {
                let r = role.toLowerCase()
                return state.user && state.user.Roles && state.user.Roles.includes(r)
            }
        },
    },

    actions: {
        apiRequestStarted({ commit }, config) {
            commit('requestStarting')
            app.$Progress.start()
            return config
        },
        apiRequestError({ commit }, config) {
            commit('requestCompleted')
            app.$Progress.fail()
            return Promise.reject(config)
        },
        apiResponseReceived({ commit }, response) {
            commit('requestCompleted')
            app.$Progress.finish()
            return response
        },
        apiResponseError({ commit, dispatch }, err) {
            if (err && err.response && (err.response.status === 401 || err.response.status === 403)) {
                dispatch('gotoLogin')
                return Promise.reject(err)
            }
            app.$Progress.fail()
            console.error(err)
            commit('requestCompleted')
            return Promise.reject(err)
        },

        gotoLogin(returnUrl) {
            const loginUrl = window.location.protocol + '//' + window.location.host + '/identity/login'
            const returnPath = returnUrl.length > 0 ? '?returnUrl=' + encodeURIComponent(returnUrl) : ''
            window.location.href = loginUrl + returnPath
        },

        gotoLogout() {
            window.location.href = window.location.protocol + '//' + window.location.host + '/identity/logout'
        },
    },

    modules: {
        student,
        teacher,
        account,
    },
})
