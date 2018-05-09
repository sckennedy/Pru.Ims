//import the api files from each of the different components
import axios from 'axios'

const api = axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

const configureEventHandlers = function(onRequest, onRequestError, onResponse, onResponseError) {
    api.interceptors.request.use(onRequest, onRequestError)
    api.interceptors.response.use(onResponse, onResponseError)
}

const setToken = function(token) {
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

var apiModule = {
    configureEventHandlers,
    setToken,
    refreshToken: function() {
        delete axios.defaults.headers.common['Authorization']
        return api.get('identity/token')
            .then(response => {
                return response.data
            })
    },
    //bct: bct(api),
    //taxi: taxi(api),
    //onwardTravel: onwardTravel(api),
    //partner: partner(api),
}

export default apiModule
