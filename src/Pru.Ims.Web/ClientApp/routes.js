import store from './store'
import login from './components/login.vue'
import dashboard from './components/dashboard.vue'

function requireAuth (to, from, next) {
    if (!store.state.loggedIn) {
        next({
            path: '/login',
            query: { redirect: to.path }
        })
    } else {
        next()
    }
}

export const routes = [
    { path: '/', component: login, beforeEnter: requireAuth, display: 'Home', style: 'glyphicon glyphicon-home' },
    { path: '/login', component: dashboard, display: 'Login', style: 'glyphicon glyphicon-education' },
    { path: '/logout', display: 'Logout', style: 'glyphicon glyphicon-th-list' }
]
