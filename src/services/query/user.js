import endpoints from '~/constants/endpoints';
import { privateAxios, axios } from '../request/axiosConfig';

export const getUserDetails = async () => {
  try {
    const response = await privateAxios.get(`${endpoints.PROFILE}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const register = async (data) => {
  const payload = {
    "user_name": data.user_name,
    "email": data.email,
    "password": data.password,
    "date_of_birth": data.date_of_birth,
    "gender": data.gender
  }
  return await axios.post(endpoints.REGISTER, {
    ...payload,
  });
};

export const changePassword = async (data) => {
  return await privateAxios.put(endpoints.CHANGE_PASS, {
    ...data,
  });
};

export const updateUserProfile = async (data) => {
  return await privateAxios.patch(`${endpoints.PROFILE}`, {
    ...data,
  });
};
