import {Image, Text, View} from 'react-native';
import {styles} from './style.ts';
import InputComponent from '../../components/inputGeneric/input.component.tsx';
import AddContactButtonComponent from './components/addNewContact.component.tsx';
import HomeScreenHook from '../../hooks/homeScreen.tsx';
import {useCallback, useState} from 'react';
import ContactCardComponent from '../../components/contactCardComponent/contactCard.component.tsx';
import {useUser} from '../../context/userContext.tsx';
import {UserInfoInterface} from '../../interface/user.interface.ts';
import {ContactInterface} from '../../interface/contacts.interface.ts';
import { useFocusEffect } from '@react-navigation/native';
import ContactList from '../../components/sectionlistComponent/sectionList.component.tsx';

const HomeScreen = () => {
  const {randomImg, getRandomAvatar, setRandomImg} = HomeScreenHook();
  const [user, setUser] = useState<UserInfoInterface | null>(null);
  const [contacts, setContacts] = useState<ContactInterface[] | null>(null);
  const userContext = useUser();

  const fetchData = async () => {
    const contacts = await userContext.fetchContacts();
    const user = await userContext.getUser(); 
    setContacts(contacts);
    setUser(user);
  };
  
  useFocusEffect(
    useCallback(() => {
      fetchData(); 
      setRandomImg(getRandomAvatar());
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerItemsHeader}>
          <Text style={styles.titleSectionContact}>
            Search contacts{' '}
            <Text style={styles.titleSectionContactSpan}>{user?.name}</Text>
          </Text>

          <InputComponent placeholder="Search someone..." />

          <AddContactButtonComponent />
        </View>
        <View>
          <Image source={randomImg as any} style={styles.img} />
        </View>
      </View>
      <View
        style={
          !contacts || contacts.length === 0
            ? styles.containerNotContactsAviable
            : styles.containerContacts
        }>
        {(!contacts || contacts.length === 0) && (
          <View>
            <Image
              style={styles.imgNoContactsAviable}
              source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/fireChubb.png')}
            />
            <Text style={styles.textNoContactsAviable}>
              No contacts available yet.{'\n'}
              <Text style={styles.spamNoContacts}>save a contact!</Text>
            </Text>
          </View>
        )}
        
        {contacts &&
          contacts.length > 0 && <ContactList contacts={contacts}/>}
      </View>
    </View>
  );
};

export default HomeScreen;
