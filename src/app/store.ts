import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer, { hot as loginHot } from '../features/login/redux';
import apiReducer, { init as apiInit, callEndpoint, hot as apiHot } from '../api';

const rootReducer = {
  counter: counterReducer,
  login: loginReducer,
  api: apiReducer
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: callEndpoint,
      },
      serializableCheck: false,
    }),
});

// add hot module replacement for reducers
if (process.env.NODE_ENV !== 'production' && module?.['hot']) {
  module['hot'].accept([
    loginHot,
    apiHot
  ], () => store.replaceReducer(rootReducer as any));
}

// run initialisers
[apiInit].forEach(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
