import axios from 'axios'

//响应拦截器
axios.interceptors.response.use((ret) => {
  if (ret.data) {
    return ret.data
  } else {
    return ret
  }
})
function getCookie() {
  let cookie = document.cookie.split(';')
  let obj = {}
  cookie.forEach((val, key) => {
    let arr = val.split('=')
    obj[arr[0]] = arr[1]
  })
  return obj
}
//请求拦截器
axios.interceptors.request.use((ret) => {
  if (getCookie().token) {
    ret.headers.authorization = getCookie().token
  }
  return ret
})

export default axios
