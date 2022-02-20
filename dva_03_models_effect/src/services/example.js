import request from '../utils/request';

const poxy='/apihahaha'

export function query() {
  return request('/api/users');
}

export function getTopics() {
  return request(poxy+'/api/v1/topics');
}
