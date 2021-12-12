import { createSlice } from '@reduxjs/toolkit';

import { IResponse, IDispatch, IState } from 'types';
import { RootState } from 'app/store';

export const hot = '../api/index.ts';

export interface ApiState {
  appUrl: string;
  endpoints: any;
  status: 'idle' | 'loading' | 'failed';
  error: string;
}

const initialState: ApiState = {
  appUrl: '',
  endpoints: {},
  status: 'idle',
  error: ''
};

export const counterSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    init: (state, action) => {
      console.log('api init ***');
      // state.endpoints = getApiEndpoints(state.appUrl);
    },
    failure: (state, action) => {
      state.error = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    }
  }
});

export const { init, status, failure } = counterSlice.actions;

export const selectAppUrl = (state: RootState) => state.api.appUrl;

export const selectStatus = (state: RootState) => state.api.status;

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const callEndpoint = (api: string, method: string, body: any) => async (
  dispatch: IDispatch,
  getState: IState
): Promise<IResponse> => {
  const url = selectAppUrl(getState());
  const options: any = {
    method,
    // mode: 'no-cors',
    headers: { 'Content-Type': 'application/json', Accept: '*/*', 'Content-Encoding': 'gzip, deflate, br' },
    body: JSON.stringify(body)
  };
  console.log('options :::', options);
  try {
    dispatch(status('loading'));
    const response = await fetch(
      `${url}/${api}`,
      options
    );
    await wait(2000);
    const data: any = await response.json();
    const value: IResponse = { status: 'success', data };
    dispatch(status('idle'));
    return value;
  } catch (e: any) {
    await wait(2000);
    dispatch(failure(e.message));
    dispatch(status('failed'));
    const value: IResponse = { status: 'error', error: e.message };
    return value;
  }
};

export default counterSlice.reducer;
