import { PROXY_BASE_URL } from '@/config'
import Qs from 'qs'
import axios from 'axios'
import store from '@/store'
import { Loading } from 'element-ui';

let loadingInstance
// 创建axios实例
const service = axios.create({
  baseURL: PROXY_BASE_URL, // api的base_url
  timeout: 120000, // 请求超时时间
  validateStatus: function (status) {
    return status >= 200 && status < 510
  },
  transformRequest: [
    function (data) {
      data = Qs.stringify(data, { arrayFormat: 'repeat' })
      return data
    }
  ],
  transformResponse: [
    function (data) {
      try {
        data = JSON.parse(data)
        return data
      } catch (err) {
        return data
      }
    }
  ]
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default service
