import store from './store'
import App from './components/App.vue'
import Login from './components/Account/Login.vue'
import Logout from './components/Account/Logout.vue'
import Profile from './components/Account/Profile.vue'
import Students from './components/Students/Index.vue'
import Teachers from './components/Teachers/Index.vue'
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
    { path: '/', name: 'Home', component: Home},
    { path: '/login', name: 'Login', component: Login },
    { path: '/home', name: 'Home', component: Home},
    { path: '/about', name: 'About', component: About},
    { path: '/account/profile', name: 'Profile', component: Profile},
    { path: '/account/logout', name: 'Logout', component: Logout},
    { path: '/students', name: 'Students', component: Students},
    { path: '/teachers', name: 'Teachers', component: Teachers}
]
