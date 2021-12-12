export * from './api';

export type IDispatch = (action: any) => {};

export type IState = Function;

export type IResponse = {
  error?: string;
  errors?: any;
  errorCode?: string;
  description?: string;
  data?: any;
  status?: 'success' | 'error';
  malformatted?: boolean;
  VerifyToken?: string;
}
