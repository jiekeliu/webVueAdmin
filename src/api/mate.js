import request from '@/utils/request'
import qs from 'qs';

export function fetchMateList(query) {
  return request({
    url: '/mate',
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

export function createMate(data) {
  console.log(data)
  return request({
    url: '/mateAdd',
    method: 'post',
    data:qs.stringify(data)
  })
}

export function updateMate(data) {
  return request({
    url: '/mateUp',
    method: 'post',
    data:qs.stringify(data)
  })
}

export function delMate(data) {
  return request({
    url: '/mateDel',
    method: 'post',
    data:qs.stringify(data)
  })
}
