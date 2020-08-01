import {request} from '../globals/config/axios';
import {INSTRUCTOR} from '../globals/config/url';

export const getInstructors = () => {
  console.log('api');
  return request.get(`/${INSTRUCTOR}`);
};
