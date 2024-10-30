import React from 'react';
import {SectionList, View, Text, TouchableOpacity, Image} from 'react-native';
import {ContactInterface} from '../../interface/contacts.interface';
import ContactCardComponent from '../contactCardComponent/contactCard.component';
import {styles} from './styles';

interface ContactListProps {
  contacts: ContactInterface[];
}

const ContactList: React.FC<ContactListProps> = ({contacts}) => {
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
    <SectionList
      style={styles.containerList}
      sections={sections}
      keyExtractor={item => item.number.toString()}
      renderItem={({item}) => (
        <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15}}>
          <ContactCardComponent
            name={item.name}
            img={item.img}
            role={item.role}
            index={item.id}
            number={item.number}
            secondNumber={item.secondNumber}
            address={item.address}
            email={item.email}
          />
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={styles.containertextSeparator}>
          <Text style={styles.textSeparator}>{title}</Text>
        </View>
      )}
    />
  );
};

export default ContactList;
