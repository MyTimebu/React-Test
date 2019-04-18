import axios from 'axios'
axios.defaults.baseURL = `http://47.96.21.88:8086`

axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // console.log(config)
    if (config.url === 'login' || config.url === 'homes/swipe') {
      return config
    } else {
      const token = localStorage.getItem('token')
      config.headers.Authorization = token
      return config
    }
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么

    return response.data
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default axios;
