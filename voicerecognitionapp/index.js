/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//코드 추가 polyfill 추가
import 'core-js/features/reflect';
//import 'core-js/es6/reflect';
//import 'core-js/es7/reflect';

AppRegistry.registerComponent(appName, () => App);
