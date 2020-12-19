import request from '@/utils/request'
import qs from 'qs';

export function fetchList(query) {
  return request({
    url: '/catalogue',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
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

export function createCatalogue(data) {
  console.log(data)
  return request({
    url: '/catalogueAdd',
    method: 'post',
    data:qs.stringify(data)
  })
}

export function updateCatalogue(data) {
  return request({
    url: '/catalogueUp',
    method: 'post',
    data:qs.stringify(data)
  })
}

export function delCatalogue(data) {
  return request({
    url: '/catalogueDel',
    method: 'post',
    data:qs.stringify(data)
  })
}
