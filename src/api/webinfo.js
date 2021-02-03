import request from '@/utils/request'
import qs from 'qs';

export function getWebInfo() {
  return request({
    url: '/webinfo',
    method: 'get',
  })
}

export function updateWebInfo(data) {
  return request({
    url: '/webinfoUp',
    method: 'post',
    data:qs.stringify(data)
  })
}
