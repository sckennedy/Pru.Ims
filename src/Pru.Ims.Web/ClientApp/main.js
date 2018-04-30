import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import App from './components/App.vue'

import './assets/scss/site.scss'

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
