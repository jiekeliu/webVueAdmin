import request from '@/utils/request'
import qs from 'qs';

export function fetchList(query) {
  return request({
    url: '/articlelist',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/articleOne',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/articleAdd',
    method: 'post',
    data:qs.stringify(data)
  })
}

export function updateArticle(data) {
  return request({
    url: '/articleUp',
    method: 'post',
    data:qs.stringify(data)
  })
}


export function delArticle(data) {
  return request({
    url: '/articleDel',
    method: 'post',
    data:qs.stringify(data)
  })
}
