import axios from 'axios';
import { STORAGE_KEY_ACCESS_TOKEN } from '~/constants/localstorage';
import { handleError } from '~/services/api/errorHandler';
import { getData } from '~/services/storage';

const apiClient = (defaultConfigs) => async (requestConfig) => {
  const token = getData(STORAGE_KEY_ACCESS_TOKEN);
  try {
    const response = await axios.request({
      // ...defaultConfigs,
      url: `${defaultConfigs.url}${requestConfig.endpoint}`,
      method: requestConfig.method,
      data: requestConfig.data,
      params: requestConfig.params,
      headers: { ...token && { Authorization: `Bearer ${token} ` }, ...requestConfig.headers }
    })

    return {
      code: response.status,
      success: true,
      data: response.data.data ? response.data.data : response.data,
      error: response.statusText,
      message: response.data.message,
      meta: response.data?.meta_info
    }
  } catch (error) {
    return handleError(error);
  }
}

export const adminApi = apiClient({ url: process.env.NEXT_PUBLIC_API_BASE_URL });
