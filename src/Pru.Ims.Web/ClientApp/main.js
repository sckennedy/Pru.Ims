import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueProgressBar from 'vue-progressbar'

// Main holding component
import App from './components/App.vue'

//routing
import AccountRouter from './components/Account/router'
import StudentRouter from './components/Student/router'

// Styling
import 'vuetify/dist/vuetify.min.css'
import './assets/scss/site.scss'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: colors.lightGreen.darken1,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
    }
})

Vue.use(VueProgressBar, {
    color: '#00b0b0',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 600,
    },
    autoRevert: true,
    location: 'top',
    inverse: false,
})

// Sync Vue router and the Vuex store
sync(store, router)

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
    //template: '<App/>',
    //components: { App }
})

export {
    app,
    router,
    store
}

//store.dispatch('checkLoggedIn')
