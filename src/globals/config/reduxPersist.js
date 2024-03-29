import {AsyncStorage} from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';

const REDUX_PERSIST = {
  active: true,
  key: 'root',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,

    transforms: [
      immutableTransform({
        whitelist: ['user'], // TODO: 'app'
      }),
    ],
  },
};

export default REDUX_PERSIST;
