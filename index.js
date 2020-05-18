/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forget-password';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import CourseDetail from './src/components/CourseDetail/course-detail';
import Home from './src/components/Main/Home/home';

AppRegistry.registerComponent(appName, () => App);
