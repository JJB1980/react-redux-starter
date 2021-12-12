export type CallEndpoint = (api: string, method: string, body: any) => {};

export type ThunkArgs = { callEndpoint: CallEndpoint };

export type AuthResponse = {
  token?: string;
	expiresIn: number;
	environment?: string;
};
