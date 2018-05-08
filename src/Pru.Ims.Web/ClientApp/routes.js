import store from './store'
import App from './components/App.vue'
import Login from './components/Account/Login.vue'
import Logout from './components/Account/Logout.vue'
import Profile from './components/Account/Profile.vue'
import Students from './components/Students/Students.vue'
import Student from './components/Students/Student.vue'
import Teachers from './components/Teachers/Teachers.vue'
import Teacher from './components/Teachers/Teacher.vue'
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
    { path: '/about', name: 'About', component: About},
    { path: '/account/profile', name: 'Profile', component: Profile},
    { path: '/account/logout', name: 'Logout', component: Logout},
    { path: '/students', name: 'Students', component: Students},
    { path: '/student/:id', name: 'Student', component: Student, props: true},
    { path: '/teachers', name: 'Teachers', component: Teachers},
    { path: '/teacher/:id', name: 'Teacher', component: Teacher, props: true}
]
