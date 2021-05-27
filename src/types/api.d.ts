
export type CallEndpoint = (api: string, method: string, body: any) => {};

export type IResponse = {
  error?: string;
  data?: any;
  status: 'success' | 'error'
}
