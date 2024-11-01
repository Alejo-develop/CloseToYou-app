import {useState} from 'react';
import {chubbImg} from '../assets/img.data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContactInterface } from '../interface/contacts.interface';
import { UserInfoInterface } from '../interface/user.interface';
import { useUser } from '../context/userContext';

const HomeScreenHook = () => {
  const [randomImg, setRandomImg] = useState<string>('');
  const [user, setUser] = useState<UserInfoInterface | null>(null);
  const [contacts, setContacts] = useState<ContactInterface[] | null>(null);

  const userContext = useUser();

  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * chubbImg.length);
    return chubbImg[randomIndex].chubb;
  };

  const clearContacts = async () => {
    try {
      await AsyncStorage.removeItem('contacts');
      console.log('Contactos eliminados de AsyncStorage');
    } catch (error) {
      console.error('Error al borrar los contactos:', error);
    }
  };

  const fetchData = async () => {
    const contacts = await userContext.fetchContacts();
    const user = await userContext.getUser();
    setContacts(contacts);
    setUser(user);
  }; 

  return {
    randomImg,
    setRandomImg,
    getRandomAvatar,
    clearContacts,
    fetchData,
    setContacts,
    contacts,
    user,
    userContext
  };
};

export default HomeScreenHook;
