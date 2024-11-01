import {Image, Text, View} from 'react-native';
import {styles} from './style.ts';
import InputComponent from '../../components/inputGeneric/input.component.tsx';
import AddContactButtonComponent from './components/addNewContact.component.tsx';
import HomeScreenHook from '../../hooks/homeScreen.tsx';
import {useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ContactList from '../../components/sectionlistComponent/sectionList.component.tsx';

const HomeScreen = () => {
  const {randomImg, getRandomAvatar, setRandomImg, contacts, user, userContext, clearContacts, setContacts, fetchData} = HomeScreenHook();

  useFocusEffect(
    useCallback(() => {
      fetchData();
      // clearContacts( )
      setRandomImg(getRandomAvatar());  
    }, []),
  ); 

  useEffect(() => {
    setContacts(userContext.contacts);
  }, [userContext.contacts]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerItemsHeader}>
        <Text style={styles.titleContainerSectionContacts}>Your Address Book <Text style={styles.titleSectionContactSpan}>{user?.name}</Text></Text>
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

        {contacts && contacts.length > 0 && (
          <View>
            <ContactList contacts={contacts} />
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
