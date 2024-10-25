import {Image, Text, View} from 'react-native';
import {styles} from './style.ts';
import InputComponent from '../../components/inputGeneric/input.component.tsx';
import AddContactButtonComponent from './components/addNewContact.component.tsx';
import HomeScreenHook from '../../hooks/homeScreen.tsx';
import { useEffect, useState } from 'react';
import ContactCardComponent from '../../components/contactCardComponent/contactCard.component.tsx';
import { useUser } from '../../context/userContext.tsx';

const HomeScreen = () => {
    const { randomImg, getRandomAvatar, setRandomImg } = HomeScreenHook()
    const [user, setUser] = useState(null);
    const { getUser } = useUser();   
    
    useEffect(() => {
        setRandomImg(getRandomAvatar())
    }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerItemsHeader}>
            <Text style={styles.titleSectionContact}>
                Search <Text style={styles.titleSectionContactSpan}>Contacts</Text>
            </Text>

            <InputComponent placeholder='Search someone...'/>

            <AddContactButtonComponent />
        </View>
        <View>
            <Image
            source={randomImg as any}
            style={styles.img}
             />
        </View>
      </View>
      <View style={styles.containerContacts}>
        <ContactCardComponent />
      </View>
    </View>
  );
};

export default HomeScreen;
