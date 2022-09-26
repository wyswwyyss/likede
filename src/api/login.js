import request from '@/utils/request.js'
export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
export function vali() {
  return request({
    url: '/user-service/user/imageCode/:clientToken',
    method: 'GET',
    responseType: 'blob'
  })
}
