import {takeLatest, all, call, put} from 'redux-saga/effects';
import InstructorActions, {InstructorTypes} from '../redux/instructorRedux';
import * as apiInstructor from '../services/instructorServices';
import AppActions from '../redux/appRedux';

function* instructorRootSaga() {
  yield all([
    yield takeLatest(InstructorTypes.GET_INSTRUCTORS_REQUEST, getInstructors),
  ]);
}

function* getInstructors({actionSuccess}) {
  try {
    console.log('saga');
    const response = yield call(apiInstructor.getInstructors);
    //yield put(CourseActions.getTopSellingSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    // yield put(CourseActions.getTopSellingFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

export default instructorRootSaga;
