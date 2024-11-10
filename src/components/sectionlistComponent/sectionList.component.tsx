import React from 'react';
import {SectionList, View, Text} from 'react-native';
import {ContactInterface} from '../../interface/contacts.interface';
import ContactCardComponent from '../contactCardComponent/contactCard.component';
import {styles} from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContactListProps {
  contacts: ContactInterface[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  // Validar que los contactos no sean nulos o indefinidos
  if (!contacts || !Array.isArray(contacts)) {
    return null; // O renderizar un mensaje de error
  }
  
  const sortedContacts = [...contacts].sort((nameA, nameB) =>
    nameA.name.localeCompare(nameB.name),
  );

  const groupedContacts = sortedContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, ContactInterface[]>);

  const sections = Object.keys(groupedContacts)
    .sort()
    .map(letter => ({
      title: letter,
      data: groupedContacts[letter],
    }));

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 55}}>
    <SectionList
      style={styles.containerList}
      sections={sections}
      keyExtractor={(item, index) => item.id || `contact-${index}`}
      renderItem={({ item }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
          <ContactCardComponent
            name={item.name}
            img={item.img}
            role={item.role}
            index={item.id ? item.id : ''}
            number={item.phone}
            secondPhone={item.secondPhone}
            address={item.address}
            email={item.email}
            seconName={item.secondName}
            lastName={item.lastName}
            longitude={item.longitude}
            latitude={item.latitude}
          />
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.containertextSeparator}>
          <Text style={styles.textSeparator}>{title}</Text>
        </View>
      )}
    />
  </SafeAreaView>
  );
};

export default ContactList;
