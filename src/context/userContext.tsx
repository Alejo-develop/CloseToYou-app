import {createContext, useContext, useState} from 'react';
import {ContactInterface} from '../interface/contacts.interface';
import {UserInfoInterface} from '../interface/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  getUser: () => Promise<UserInfoInterface | null>;
  getContacts: () => Promise<ContactInterface[] | null>;
}

const UserContext = createContext<UserContextProps>({
  getUser: async () => null,
  getContacts: async () => null,
});

export const UserProvider = ({children}: UserProviderProps) => {
  const [contacts, setContacts] = useState<ContactInterface[]>();
  const [user, setUser] = useState<UserInfoInterface>();

  const getContacts = async () => {
    try {
        const _contacts = await AsyncStorage.getItem('contacts');
        if (_contacts) {
          const contactData = JSON.parse(_contacts) as ContactInterface[];
          setContacts(contactData);
          return contactData;
        }
  
        return null;
      } catch (err) {
        console.log(err);
        return null
      }
  };

  const getUser = async () => {
    try {
      const _user = await AsyncStorage.getItem('userInfo');
      if (_user) {
        const userData = JSON.parse(_user) as UserInfoInterface;
        setUser(userData);
        return userData;
      }

      return null;
    } catch (err) {
      console.log(err);
      return null
    }
  };

  return (
    <UserContext.Provider value={{getUser, getContacts}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
