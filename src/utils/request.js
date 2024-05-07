import axios from "axios";
import { baseURL } from '../config'

var instance = axios.create({
    baseURL,
    timeout: 20000,

})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("sucess")
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance