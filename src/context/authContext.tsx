import {createContext, useContext, useState} from 'react';
import {ContactInterface} from '../interface/contacts.interface';
import {UserInfoInterface} from '../interface/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserByIdService} from '../services/user.services';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  getUser: () => Promise<UserInfoInterface | null>;
  isAuth: boolean;
  saveSessionInfo: (id: string, token: string) => Promise<void>;
  signOut: () => Promise<void>;
  getId: () => string;
  getToken: () => Promise<string>;
}

const AuthContext = createContext<AuthContextProps>({
  getUser: async () => null,
  isAuth: false,
  saveSessionInfo: async () => {},
  signOut: async () => {},
  getId: () => '',
  getToken: async () => '',
});

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [idUser, setIdUser] = useState<string>('');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const saveSessionInfo = async (id: string, token: string) => {
    setIsAuth(true);
    setIdUser(id);
    await AsyncStorage.setItem('accesstoken', token);

    return;
  };

  const signOut = async () => {
    setIsAuth(false);
    await AsyncStorage.removeItem('accesstoken');

    return;
  };

  const getId = () => {
    return idUser;
  };

  const getToken = async () => {
    return (await AsyncStorage.getItem('accesstoken')) as string;
  };

  const getUser = async () => {
    const token = await getToken();
    try {
      const _user = (await getUserByIdService(
        idUser,
        token,
      )) as UserInfoInterface;

      return _user;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signOut,
        saveSessionInfo,
        isAuth,
        getUser,
        getId,
        getToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
