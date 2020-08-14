import {combineReducers} from 'redux';
import ReduxPersist from '../globals/config/reduxPersist';
import {persistReducer} from 'redux-persist';
import configureStore from './store';
import rootSaga from '../saga';

/*---------------------------- Assemble the Reducers ------------------- */
export const reducers = combineReducers({
  user: require('./userRedux').reducer,
  app: require('./appRedux').reducer,
  course: require('./courseRedux').reducer,
  instructor: require('./instructorRedux').reducer,
  category: require('./categoryRedux').reducer,
});

export default () => {
  let finalReducers = reducers;
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }
  let {store, persistor} = configureStore(finalReducers, rootSaga);
  return {store, persistor};
};
