import axios from 'axios';
import env from './env';
import {AsyncStorage} from 'react-native';

const request = axios.create();

request.defaults.timeout = 30000;

request.defaults.baseURL = env.SERVER_PRODUCTION_URL;

request.interceptors.request.use(async (config) => {
  const token = await getToken();
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      return Promise.reject({
        message: error.response.data.message,
      });
    }
    if (error.request) {
      return Promise.reject({message: 'Không có phản hồi'});
    }
    return Promise.reject(error);
  },
);

const setToken = (token) => {
  request.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  let user = await AsyncStorage.getItem('user');
  try {
    user = JSON.parse(user);
    return user.token;
  } catch (error) {
    return undefined;
  }
};

export {request, setToken};
