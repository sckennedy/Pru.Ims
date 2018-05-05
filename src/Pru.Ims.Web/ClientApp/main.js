import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'


// Main holding component
import App from './components/App.vue'

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
