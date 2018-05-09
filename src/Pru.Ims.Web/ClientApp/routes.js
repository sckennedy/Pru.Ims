import store from './store'
import App from './components/App.vue'
import AccountHome from './components/Account/Home.vue'
import Login from './components/Account/Login.vue'
import Logout from './components/Account/Logout.vue'
import Profile from './components/Account/Profile.vue'
import StudentsHome from './components/Account/Home.vue'
import Students from './components/Students/Students.vue'
import Student from './components/Students/Student.vue'
import Home from './components/Home.vue'

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
    {
         path: '/',
         name: 'Home',
         component: Home
    },
    {
        path: '/Students',
        component: StudentsHome,
        meta: {
            breadrumb: 'Students Home'
        },
        children: [
            {
                path: 'students',
                component: Students,
                meta: {
                    breadcrumb: 'Students',
                },
            },
            {
                path: 'student/:id',
                component: Student,
                meta: {
                    breadcrumb: 'Student'
                },
            },
        ],
    },
    {
        path: '/Account',
        component: AccountHome,
        meta: {
            breadrumb: 'Account Home'
        },
        children: [
            {
                path: '/login',
                component: Login,
                meta: {
                    breadcrumb: 'Login',
                },
            },
            {
                path: '/account/profile',
                component: Profile,
                meta: {
                    breadcrumb: 'Profile'
                },
            },
            {
                path: '/account/logout',
                component: Logout,
                meta: {
                    breadcrumb: 'Logout'
                }
            },
        ],
    },
]
