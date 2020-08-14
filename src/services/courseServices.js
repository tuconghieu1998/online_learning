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

export const getCourseDetail = (params) => {
  return request.get(`/${COURSE}/get-course-detail/${params.id}/underfined`);
};

export const getTopNew = (params) => {
  return request.post(`/${COURSE}/top-new`, params);
};

export const getRecommendCourse = (params) => {
  return request.get(
    `/${USER}/recommend-course/${params.userId}/${params.limit}/${params.offset}`,
  );
};

export const search = (params) => {
  return request.post(`/${COURSE}/search`, params);
};

export const searchV2 = (params) => {
  return request.post(`/${COURSE}/searchV2`, params);
};
