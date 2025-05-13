import axios from 'axios';

export const api = () => {
  const instance = axios.create({
    baseURL: `https://api.anticaptcha.pro/v1`,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if(error.response?.data && 'msg' in error.response.data){
        return Promise.reject(new Error(error.response.data.msg))
      }
      return Promise.reject(new Error(String(error)));
    }
  );

  return instance;
};
