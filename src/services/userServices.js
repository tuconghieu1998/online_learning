import queryString from 'query-string';
import {request} from '../globals/config/axios';
import {USER} from '../globals/config/url';

export const register = (params) => {
  return request.post(`/${USER}/register`, params);
};

export const login = (params) => {
  return request.post(`/${USER}/login`, params);
};

export const getInfoUser = () => {
  return request.get(`/${USER}/me`);
};

export const forgotPassword = (params) => {
  return request.post(`/${USER}/forget-pass/send-email`, params);
};

export const getCourseLikeStatus = (params) => {
  return request.get(`/${USER}/get-course-like-status/${params.courseId}`);
};

export const likeCourse = (params) => {
  return request.post(`/${USER}/like-course`, params);
};

export const editProfile = (params) => {
  return request.put(`/${USER}/update-profile`, params);
};
