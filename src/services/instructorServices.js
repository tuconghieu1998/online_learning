import {request} from '../globals/config/axios';
import {INSTRUCTOR} from '../globals/config/url';

export const getInstructors = () => {
  return request.get(`/${INSTRUCTOR}`);
};

export const getInstructorDetail = (params) => {
  return request.get(`/${INSTRUCTOR}/detail/${params.id}`);
};
