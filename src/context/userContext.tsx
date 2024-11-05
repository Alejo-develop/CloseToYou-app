import {createContext, useContext, useState} from 'react';
import {ContactInterface} from '../interface/contacts.interface';
import {UserInfoInterface} from '../interface/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';

interface UserProviderProps {
  children: React.ReactNode;
} 

interface UserContextProps {
  getUser: () => Promise<UserInfoInterface | null>;
  contacts: ContactInterface[] | null;
  fetchContacts: () => Promise<ContactInterface[] | null>;
  getContacts: () => ContactInterface[] | null;
  saveContact: (newContact: ContactInterface) => Promise<void>;
  deleteContact: (id: number) => void,
  editContact: (updateUser: ContactInterface) => Promise<void>
}
 
const UserContext = createContext<UserContextProps>({
  getUser: async () => null,
  contacts: null,
  fetchContacts: async () => null,
  getContacts: () => null,
  saveContact: async () => {},
  deleteContact: async () => {},
  editContact: async () => {}
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
    const genericUserUri = Image.resolveAssetSource(
      require('../assets/img/DrawKit_0091_Chubbs_Illustrations/genericUserPhoto.png')
    ).uri; 
    const {img, role} = newContact

    const formatedContact = {
      ...newContact,
      id: contacts.length + 1, 
      img: img ? img : genericUserUri,
      role: role ? role : 'Friend'
    }    
    console.log(JSON.stringify(formatedContact));
    

    try {
      const updateContacts = [...contacts, formatedContact];
      await AsyncStorage.setItem('contacts', JSON.stringify(updateContacts));
      setContacts(updateContacts);
      fetchContacts() 
    } catch (err) {
      console.error(err);
    }
  } 

  const editContact = async (updateUser: ContactInterface) => {
    try {
      console.log(updateUser.id);
      
      const updateContacts = contacts.map(contact => 
        contact.id === updateUser.id ? updateUser : contact
      )
      await AsyncStorage.setItem('contacts', JSON.stringify(updateContacts)); 
      setContacts(updateContacts)
      fetchContacts()
    } catch (err) { 
      console.error('Error Edit a contact' + err);  
    }
  } 

  const deleteContact = async (id: number) => {
    try {
      const updateContacts = contacts.filter(
        contact => contact.id !== id  
      )

      await AsyncStorage.setItem('contacts', JSON.stringify(updateContacts));
      setContacts(updateContacts)
      await fetchContacts()
    } catch (err) {
      console.error('Error deleting a contact' + err);
      return null
    }
  }

  const getContacts = () => (contacts && contacts.length > 0) ? contacts : null;

  return (
    <UserContext.Provider value={{editContact, contacts, getUser, fetchContacts, getContacts, saveContact, deleteContact}}>
      {children}
    </UserContext.Provider> 
  );
};

export const useUser = () => useContext(UserContext);
