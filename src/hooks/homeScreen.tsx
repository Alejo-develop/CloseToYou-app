import {useState} from 'react';
import {chubbImg} from '../assets/img.data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContactInterface } from '../interface/contacts.interface';
import { UserInfoInterface } from '../interface/user.interface';
import { useAuth } from '../context/authContext';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation.type';

const HomeScreenHook = () => {
  const [randomImg, setRandomImg] = useState<string>('');
  const [user, setUser] = useState<UserInfoInterface | null>(null);
  const [contacts, setContacts] = useState<ContactInterface[] | null>(null);

  const auth = useAuth();
  const goTo = useNavigation<RootStackParamList>()

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
    const contacts = await auth.fetchContacts();
    const user = await auth.getUser();
    setContacts(contacts);
    setUser(user);
  }; 

  const signOut = async () => {
    await auth.signOut()

    goTo.navigate('Login')
  }

  return {
    randomImg,
    setRandomImg,
    getRandomAvatar,
    clearContacts,
    fetchData,
    setContacts,
    contacts,
    user,
    userContext: auth,
    signOut
  };
};

export default HomeScreenHook;
