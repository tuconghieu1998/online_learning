/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forget-password';
import ListCourses from './src/components/Courses/ListCourses/list-courses';

AppRegistry.registerComponent(appName, () => ListCourses);
