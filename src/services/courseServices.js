import {request} from '../globals/config/axios';
import {COURSE} from '../globals/config/url';

export const getTopSelling = (params) => {
  console.log('api');
  return request.post(`/${COURSE}/top-sell`, params);
};
