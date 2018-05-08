import router from '../router'

export const mutations = {
    loggedIn(state, data) {
        state.loggedIn = true
        state.user.id = data.id
        state.user.name = (data.name || '').split(' ')[0] || 'Hello'

        let redirectTo = state.route.query.redirect || '/'
        router.push(redirectTo)
    },

    loggedOut(state) {
        state.loggedIn = false
        router.push('/login')
    },

    loginError(state, message) {
        state.loginError = message
    },

    loadTodos(state, todos) {
        state.todos = todos || [];
    }
}
