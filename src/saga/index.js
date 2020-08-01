import {all} from 'redux-saga/effects';
import userSaga from './userSaga';
import appSaga from './appSaga';
import courseSaga from './courseSaga';
import instructorSaga from './instructorSaga';

export default function* root() {
  yield all([userSaga(), appSaga(), courseSaga(), instructorSaga()]);
}
