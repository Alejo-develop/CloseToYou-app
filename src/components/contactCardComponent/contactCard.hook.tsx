import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/userContext';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { ContactInterface } from '../../interface/contacts.interface';
import { Linking } from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

const ContactCardHook = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isModalInfoVisible, setIsModalInfoVisible] = useState<boolean>(false);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null); 
  const userContext = useUser();
  const goTo = useNavigation<Props['navigation']>();
  const isFocused = useIsFocused();

  useFocusEffect(() => {
    if (isFocused && isEditing) {
      setIsModalInfoVisible(false);
      setIsEditing(false);
    }
  },);

  const handleEdit = (contact: ContactInterface) => {
    setIsModalInfoVisible(true);  
    setIsEditing(true);
    goTo.navigate('Form', contact);
  };

  const handleDelete = (index: number) => {
    userContext.deleteContact(index);
    userContext.fetchContacts();
    setIsModalVisible(false);
  };

  const showModalDelete = (index: number) => {
    setSelectedContactId(index);
    setIsModalVisible(true);
  };

  const makePhoneCall = (phoneNumber: string | undefined) => {
    const phoneURL = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneURL);
        } else {
          console.log("El dispositivo no puede hacer llamadas telefónicas");
        }
      })
      .catch((err) => console.error("Error al intentar hacer la llamada:", err));
  };
  

  return {
    isModalVisible,
    setIsModalVisible,
    handleEdit,
    handleDelete,
    showModalDelete,
    isModalInfoVisible,
    setIsModalInfoVisible,
    makePhoneCall
  };
};

export default ContactCardHook;
