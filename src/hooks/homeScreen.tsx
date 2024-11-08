import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContactInterface } from '../interface/contacts.interface';
import { useAuth } from '../context/authContext';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation.type';
import { getAllContactsServices } from '../services/contacts.services';

const HomeScreenHook = () => {
  const [contacts, setContacts] = useState<ContactInterface[] | null>(null);

  const auth = useAuth();
  const goTo = useNavigation<RootStackParamList>()

  const fetchData = async () => {
    const token = await auth.getToken()
    const contacts = await getAllContactsServices(token)
    console.log('contacts', contacts);
    
    setContacts(contacts)
  }; 

  const signOut = async () => {
    await auth.signOut()

    goTo.navigate('Login')
  }

  return {
    fetchData,
    setContacts,
    contacts,
    userContext: auth,
    signOut
  };
};

export default HomeScreenHook;
