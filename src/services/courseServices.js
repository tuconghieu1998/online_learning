import {request} from '../globals/config/axios';
import {COURSE} from '../globals/config/url';

export const getTopSelling = (params) => {
  return request.post(`/${COURSE}/top-sell`, params);
};

export const getTopRating = (params) => {
  return request.post(`/${COURSE}/top-rate`, params);
};
