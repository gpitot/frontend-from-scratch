//export const BASE_URL = "https://north-manly-squash.herokuapp.com/api";
export const BASE_URL = "http://localhost:3000/api";
export interface IJsonResponse<T> {
  data: T;
}

export interface IResultResponse {
  success: boolean;
  err? : string;
}

export const commonAxiosConfig = {
  headers: { "Content-Type": "application/json" },
};
