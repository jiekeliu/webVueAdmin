import request from '@/utils/request'
import qs from 'qs';

export function fetchFileList(query) {
  return request({
    url: 'http://47.98.116.55:9710/getFileData',
    method: 'get',
    params: query
  })
}


export function delFile(data) {
  return request({
    url: 'http://47.98.116.55:9710/delFile?',
    method: 'post',
    data:qs.stringify(data)
  })
}
