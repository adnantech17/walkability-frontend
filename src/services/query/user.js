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

export const getUsers = async (data) => {
  try {
    const response = await privateAxios.get(`${endpoints.USERS}`, { params: data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetailByUsername = async (username) => {
  try {
    const response = await privateAxios.get(`${endpoints.PROFILES}${username}/`);
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

export const createReferrals = async (data) => {
  return await privateAxios.post(endpoints.REFERRALS, {
    ...data,
  });
};

export const changePassword = async (data) => {
  return await privateAxios.put(endpoints.CHANGE_PASS, {
    ...data,
  });
};

export const createSkill = async (data) => {
  return await privateAxios.post(endpoints.CREATE_SKILL, {
    ...data,
  });
};

export const updateSkill = async (data) => {
  return await privateAxios.patch(`${endpoints.SKILL}${data.id}/`, {
    ...data,
  });
};

export const deleteSkill = async (id) => {
  return await privateAxios.delete(`${endpoints.SKILL}${id}/`);
};

export const createAcademic = async (data) => {
  return await privateAxios.post(endpoints.CREATE_ACADEMIC, {
    ...data,
  });
};

export const updateAcademic = async (data) => {
  return await privateAxios.patch(`${endpoints.ACADEMIC}${data.id}/`, {
    ...data,
  });
};

export const deleteAcademic = async (id) => {
  return await privateAxios.delete(`${endpoints.ACADEMIC}${id}/`);
};

export const createExperience = async (data) => {
  return await privateAxios.post(endpoints.CREATE_EXPERIENCE, {
    ...data,
  });
};

export const updateExperience = async (data) => {
  return await privateAxios.patch(`${endpoints.EXPERIENCE}${data.id}/`, {
    ...data,
  });
};

export const deleteExperience = async (id) => {
  return await privateAxios.delete(`${endpoints.EXPERIENCE}${id}/`);
};

export const updateUserProfile = async (data) => {
  return await privateAxios.patch(`${endpoints.PROFILE}`, {
    ...data,
  });
};
