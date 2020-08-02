import {request} from '../globals/config/axios';
import {COURSE, USER} from '../globals/config/url';

export const getTopSelling = (params) => {
  return request.post(`/${COURSE}/top-sell`, params);
};

export const getTopRating = (params) => {
  return request.post(`/${COURSE}/top-rate`, params);
};

export const getContinueLearning = () => {
  return request.get(`/${USER}/get-process-courses`);
};

export const getCoursesInFavoriteCat = (params) => {
  return request.post(`/${COURSE}/courses-user-favorite-categories`, params);
};

export const getIntroPage = () => {
  return request.get(`/${USER}/intro-page`);
};
