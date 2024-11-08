export interface ErrorResponseInterface {
  message: string;
  error: string;
  statusCode: number;
}

export interface LoginResponse{
  id: string;
  token: string;
}
