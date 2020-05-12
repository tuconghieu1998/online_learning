/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Login from './src/components/Authentication/Login/login';
// import Register from './src/components/Authentication/Register/register';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forget-password';

AppRegistry.registerComponent(appName, () => ForgetPassword);
