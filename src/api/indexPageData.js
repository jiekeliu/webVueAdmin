
import request from '../utils/request';

export function getCatalogue() {
  return request({
    url: '/catalogue',
    method: 'get'
  })
}
