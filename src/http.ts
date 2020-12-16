import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'

export const instance: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000 * 2
})

instance.interceptors.request.use(config => {
    config.headers['token'] = localStorage.getItem('token') || ''
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    if (res.status === 200) {
        if (res.data.code === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('userInfo');
        } else if (res.data.code !== 0) {
            console.log('请求出错');
        }
    } else {
        console.log('网络有误');
        res.data == null
    }
    return res
}, err => {
    if (err.response) {
        if (err.response.status === 401) {
            return new Promise(() => ({}))
        }
    }
    if (axios.isCancel(err)) {
        return new Promise(() => ({}))
    }
    return Promise.reject(err)
})

export function $axios<T>(params: AxiosRequestConfig): AxiosPromise<T> {
    return instance(params)
}