import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { login as loginAPI } from '~/services/api/queries/auth';
import { logout as logoutAPI } from '~/services/api/queries/auth';
import {
  STORAGE_KEY_ACCESS_TOKEN,
  STORAGE_KEY_AGENT_TYPE,
  STORAGE_KEY_AGENT_COUNTRY,
  STORAGE_KEY_PERMISSION,
  STORAGE_KEY_REFRESH_TOKEN,
  STORAGE_KEY_AGENT_PAYMENT_POLICY,
  STORAGE_KEY_USER_ROLE,
} from '~/constants/localstorage';
import { getData, setData, removeData } from '~/services/storage';
import { getUserDetails } from '~/services/api/queries/userProfile';
import { COUNTRY_USER, UK_COUNTRY } from '~/constants/app';

const hasAccessToken = !!getData(STORAGE_KEY_ACCESS_TOKEN);

const useAuthController = () => {
  const [isFetchingUserData, setIsFetchingUserData] = useState(hasAccessToken);
  const [userData, setUserData] = useState();
  const [permissions, setPermissions] = useState([]);

  const getToken = useCallback(() => {
    return getData(STORAGE_KEY_ACCESS_TOKEN);
  }, []);

  const setUserDataFromToken = useCallback(async () => {
    const initialData = getToken();
    if (!initialData) return;
    try {
      const data = await getUserDetails();
      if (!data.success) throw data;
      setUserData(data.data);
      setData(STORAGE_KEY_AGENT_COUNTRY, data.data.company.country);
      setData(STORAGE_KEY_AGENT_TYPE, data.data.company.agent_type);
      setData(
        STORAGE_KEY_AGENT_PAYMENT_POLICY,
        data.data.company.payment_policy
      );
      setData(STORAGE_KEY_USER_ROLE, data.data.role);
      const processPermissions = getProcessedPermissions(
        data.data.permissions,
        data.data
      );
      setData(STORAGE_KEY_PERMISSION, processPermissions);
      setPermissions(processPermissions);
    } catch (error) {
      // logout();
    } finally {
      setIsFetchingUserData(false);
    }
  }, [getToken, getProcessedPermissions]);

  const getProcessedPermissions = useCallback((permissions, userData) => {
    const keys = Object.keys(permissions);
    return keys.reduce(
      (a, c) => {
        a.push(...permissions[c].map((p) => `${c}__${p}`));
        return a;
      },
      [
        'dashboard',
        ...(userData.user_type === 'local_user' ? ['search-new-booking'] : []),
        ...(userData.user_type === COUNTRY_USER && userData.country !== UK_COUNTRY ? ['my-local-agent-bookings'] : []),
        ...(userData.user_type === COUNTRY_USER ? ['announcement-banner', 'announcement-offer'] : []),
      ]
    );
  }, []);

  useEffect(() => {
    setUserDataFromToken();
  }, [setUserDataFromToken]);

  const logout = useCallback(async () => {
    try {
      const data = await logoutAPI();
      if (!data.success) throw data;
      if (data.success) {
        removeData(STORAGE_KEY_ACCESS_TOKEN);
        removeData(STORAGE_KEY_REFRESH_TOKEN);
        removeData(STORAGE_KEY_PERMISSION);
        removeData(STORAGE_KEY_AGENT_TYPE);
        removeData(STORAGE_KEY_AGENT_COUNTRY);
        removeData(STORAGE_KEY_AGENT_PAYMENT_POLICY);
        removeData(STORAGE_KEY_USER_ROLE);
        setUserData(undefined);
        setPermissions([]);
      }
    } catch (error) {
      throw error;
    }
  }, []);

  const login = useCallback(
    async ({ email, password }) => {
      try {
        const data = await loginAPI({ email, password });
        if (!data.success) throw data;
        if (data.success) {
          setData(STORAGE_KEY_ACCESS_TOKEN, data.data.access_token);
          setData(STORAGE_KEY_REFRESH_TOKEN, data.data.refresh_token);
        }
        setUserDataFromToken();
        return data;
      } catch (error) {
        throw error;
      }
    },
    [setUserDataFromToken]
  );

  return {
    userData,
    permissions,
    isAuthenticated: !!userData,
    isFetchingUserData,
    setUserData,
    login,
    getToken,
    logout,
  };
};

export const AuthContext = createContext({
  userData: undefined,
  permissions: getData(STORAGE_KEY_PERMISSION),
  isAuthenticated: false,
  isFetchingUserData: hasAccessToken,
  setUserData: () => { },
  login: {},
  getToken: undefined,
  logout: {},
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuthController()}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
