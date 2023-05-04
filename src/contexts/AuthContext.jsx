import { useRouter } from 'next/router';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  STORAGE_KEY_ACCESS_TOKEN,
  STORAGE_KEY_REFRESH_TOKEN,
} from '~/constants/localstorage';
import { login, logout } from '~/services/query/login';
import { getUserDetails } from '~/services/query/user';
import { privateAxios } from '~/services/request/axiosConfig';
import { setTokenInHeader } from '~/services/request/axiosHelper';
import { LocalStorage } from '~/services/storage/localstorage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isFetchingUserData, setIsFetchingUserData] = useState(false);
  const [userData, setUserData] = useState();
  const router = useRouter();

  const getToken = useCallback(() => {
    return LocalStorage.getData(localStorage, STORAGE_KEY_ACCESS_TOKEN);
  }, []);

  const initialize = useCallback(async () => {
    const initialData = getToken();
    if (!initialData) return;
    setTokenInHeader(privateAxios.defaults);

    setIsFetchingUserData(true);
    try {
      const data = await getUserDetails();
      setUserData(data);
    } catch (error) {
    } finally {
      setIsFetchingUserData(false);
    }
  }, [getToken]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const fetchUser = useCallback(async () => {
    try {
      const data = await getUserDetails();
      setUserData(data);
    } catch (error) {
    } finally {
      setIsFetchingUserData(false);
    }
  }, []);

  const handleSuccess = useCallback(
    (data) => {
      LocalStorage.setData(
        localStorage,
        STORAGE_KEY_ACCESS_TOKEN,
        data.access_token
      );
      initialize();
      router.push('/');
    },
    [initialize]
  );

  const logoutUser = useCallback(async () => {
    try {
      // const res = await logout();
      LocalStorage.removeData(localStorage, STORAGE_KEY_ACCESS_TOKEN);
      setUserData(undefined);
      return res;
    } catch (error) {
      throw error;
    }
  }, []);

  const loginToAccount = useCallback(
    async (params) => {
      try {
        const res = await login(params);
        // if (!data.success) throw data;
        // if (data.success)
        console.log(res);
        handleSuccess(res.data);
        return res;
      } catch (error) {
        throw error;
      }
    },
    [handleSuccess]
  );

  // const updateProfile = useCallback(
  //   async (data) => {
  //     try {
  //       const res = await updateUserDetails(data);
  //       if (!res.success) throw res;
  //       if (res.success) setUserData(res.data);
  //       return res;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
  //   [setUserData]
  // );

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized: !!userData,
        isFetchingUserData,
        userData,
        setUserData,
        fetchUser,
        getToken,
        loginToAccount,
        // updateProfile,
        logoutUser,
        onLogin: handleSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
