import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {useUser} from '../../context/userContext';
import {useNavigation} from '@react-navigation/native';
import {ContactInterface} from '../../interface/contacts.interface';

interface Props extends NativeStackScreenProps<any, any> {}
const ContactCardHook = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isModalInfoVisible, setIsModalInfoVisible] = useState<boolean>(false);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null); 
  const useContext = useUser();
  const goTo = useNavigation<Props['navigation']>();

  const handleEdit = ({
    name,
    role,
    img,
    id: index,
    email,
    address,
    number,
    secondNumber,
  }: ContactInterface) => {
    goTo.navigate('Form', {
      name,
      role,
      img,
      id: index,
      email,
      address,
      number,
      secondNumber,
    });
  };

  const handleDelete = (index: number) => {
    useContext.deleteContact(index);
    useContext.fetchContacts();
    setIsModalVisible(false);
  };

  const showModalDelete = (index: number) =>{
    setSelectedContactId(index);
    setIsModalVisible(true)
  }

  return {
    isModalVisible,
    setIsModalVisible,
    handleEdit,
    handleDelete,
    showModalDelete,
    isModalInfoVisible,
    setIsModalInfoVisible
  };
};

export default ContactCardHook
