import {request} from '../globals/config/axios';
import {COURSE, USER, LESSON} from '../globals/config/url';

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

export const getFavoriteCourses = () => {
  return request.get(`/${USER}/get-favorite-courses`);
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

export const getHistories = () => {
  return request.get(`/${COURSE}/search-history`);
};

export const deleteHistories = (params) => {
  return request.delete(`/${COURSE}/delete-search-history/${params.id}`);
};

export const checkOwnCourse = (params) => {
  return request.get(`/${USER}/check-own-course/${params.id}`);
};

export const getUrlVideo = (params) => {
  return request.get(`/${LESSON}/video/${params.courseId}/${params.lessonId}`);
};

export const updateCurrentTimeLearnVideo = (params) => {
  console.log(params);
  return request.put(`/${LESSON}/update-current-time-learn-video`, params);
};

export const getLastWatchedLesson = (params) => {
  return request.get(`/${COURSE}/last-watched-lesson/${params.courseId}`);
};
