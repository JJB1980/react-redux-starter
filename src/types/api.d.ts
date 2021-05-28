
export type CallEndpoint = (api: string, method: string, body: any) => {};

export type ThunkArgs = { callEndpoint: CallEndpoint };

export type IResponse = {
  error?: string;
  data?: any;
  status: 'success' | 'error'
}
