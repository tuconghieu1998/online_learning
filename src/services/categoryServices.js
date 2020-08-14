import {request} from '../globals/config/axios';
import {CATEGORY} from '../globals/config/url';

export const getCategories = () => {
  return request.get(`/${CATEGORY}/all`);
};
