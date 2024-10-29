import {createContext, useContext, useState} from 'react';
import {ContactInterface} from '../interface/contacts.interface';
import {UserInfoInterface} from '../interface/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  getUser: () => Promise<UserInfoInterface | null>;
  fetchContacts: () => Promise<ContactInterface[] | null>;
  getContacts: () => ContactInterface[] | null;
  saveContact: (newContact: ContactInterface) => Promise<void>;
}

const UserContext = createContext<UserContextProps>({
  getUser: async () => null,
  fetchContacts: async () => null,
  getContacts: () => null,
  saveContact: async () => {},
});

export const UserProvider = ({children}: UserProviderProps) => {
  const [contacts, setContacts] = useState<ContactInterface[]>([]);
  const [user, setUser] = useState<UserInfoInterface>();

  const fetchContacts = async () => {
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

  const saveContact = async (newContact: ContactInterface) =>{
    try {
      const updateContacts = [...contacts, newContact];
      await AsyncStorage.setItem('contacts', JSON.stringify(updateContacts));
      setContacts(updateContacts);
      fetchContacts()
    } catch (err) {
      console.error(err);
    }
  }

  const getContacts = () => (contacts && contacts.length > 0) ? contacts : null;

  return (
    <UserContext.Provider value={{getUser, fetchContacts, getContacts, saveContact}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
