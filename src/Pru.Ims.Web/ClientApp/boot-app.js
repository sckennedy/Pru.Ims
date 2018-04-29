import Vue from 'vue'
import axios from 'axios'
import App from './components/App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

// Sync Vue router and the Vuex store
sync(store, router)

const app = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})

export {
    app,
    router,
    store
}

store.dispatch('checkLoggedIn')
