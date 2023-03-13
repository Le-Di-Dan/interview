import axios from "axios"

axios.interceptors.request.use(function(config) {
    config.headers['authorization'] = 'abc'
    console.log('abc')
    return config
})

axios.defaults.headers.common['authorization'] = 'abc'
const request = axios.create()
export default request