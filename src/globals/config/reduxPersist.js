import {AsyncStorage} from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';

const REDUX_PERSIST = {
  active: true,
  key: 'root',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['user'], // TODO: 'app'
    transform: [immutableTransform],
  },
};

export default REDUX_PERSIST;
