import React from 'react';
import {SectionList, View, Text, TouchableOpacity, Image} from 'react-native';
import { ContactInterface } from '../../interface/contacts.interface';

interface ContactListProps {
  contacts: ContactInterface[];
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
}) => {
  // Crear una copia antes de ordenar
  const sortedContacts = [...contacts].sort((nameA, nameB) => nameA.name.localeCompare(nameB.name));

  // Agrupar los contactos por la primera letra de su nombre
  const groupedContacts = sortedContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, ContactInterface[]>);

  // Crear secciones
  const sections = Object.keys(groupedContacts)
    .sort()
    .map(letter => ({
      title: letter,
      data: groupedContacts[letter],
    }));

  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.number.toString()} // Asegúrate de que `number` sea único y conviértelo a cadena
      renderItem={({item}) => (
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            {item.img && (
              <Image source={{uri: item.img}} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
            )}
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={{ backgroundColor: '#f0f0f0', padding: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
        </View>
      )}
    />
  );
};

export default ContactList;
