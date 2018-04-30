import store from './store'
import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

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
    //{ path: '/', name: 'Home', component: App },
    { path: '/home', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About}
]
