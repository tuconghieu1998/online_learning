/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import moment from 'moment';

moment.locale('vi');

AppRegistry.registerComponent(appName, () => App);
