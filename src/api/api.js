import axios from 'axios';
import { HttpCode, ErrorMessage, REQUEST_TIMEOUT, BACKEND_URL } from '../const';

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;

    if (response === undefined) {
      throw err;
    }

    if (response.status === HttpCode.UNAUTHORIZED) {
      throw err;
    }

    if (response.status === HttpCode.DATA_ERROR) {
      console.log(ErrorMessage.NO_CONNECTION);
    }

    if (response.status === HttpCode.NOT_FOUND) {
      console.log(ErrorMessage.NO_CONNECTION);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};