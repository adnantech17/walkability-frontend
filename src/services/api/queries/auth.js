import endpoints from '~/constants/endpoints';
import { adminApi } from '~/services/api/client';


export const login = async (data) => {

  const payload = {
    email: data.email,
    password: data.password
  }

  return await adminApi({
    endpoint: endpoints.LOGIN,
    method: 'post',
    data: payload,
  });

};


export const logout = async () => {
  return await adminApi({
    endpoint: endpoints.LOGOUT,
    method: 'delete',
  });
};


export const forgotPassword = async (data) => {

  const payload = {
    email: data.email
  }

  return await adminApi({
    endpoint: endpoints.FORGOT_PASSWORD,
    method: 'post',
    data: payload,
  });

};


export const resetPassword = async (data) => {

  const payload = {
    'password': data.password,
  }

  return await adminApi({
    endpoint: endpoints.RESET_PASSWORD,
    method: 'patch',
    data: payload,
    headers: { Authorization: `Bearer ${data.token} ` }
  });
};



