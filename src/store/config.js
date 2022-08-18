import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import localForage from "localforage";

import rootReducer from '../reducers';

const persistConfig = {
  key: 'fe-practice',
  storage: localForage
};

const persistedReducer = persistReducer( persistConfig, rootReducer );

export default function configureStoreFunc( initialState ) {
  return createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
  )
}