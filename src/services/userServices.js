import queryString from 'query-string';
import {request} from '../globals/config/axios';
import {USER} from '../globals/config/url';

export const register = (params) => {
  return request.post(`/${USER}/register`, queryString.stringify(params));
};
