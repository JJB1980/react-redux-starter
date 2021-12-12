import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import apiReducer, { init as apiInit, callEndpoint, hot as apiHot } from 'api';
import counterReducer from 'features/counter/counterSlice';
import loginReducer, { hot as loginHot } from 'features/login/redux';

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
        extraArgument: { callEndpoint },
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
const p = [apiInit].map((init: any) => (store.dispatch(init())));
Promise.all(p).then(() => console.log('inits done.')).catch((e) => console.log(`inits error: ${e}`));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
