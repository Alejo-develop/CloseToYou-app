import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style.ts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ContactCardProps} from '../../interface/contactCard.interface.ts';
import {useUser} from '../../context/userContext.tsx';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const ContactCardComponent = ({
  img,
  name,
  role,
  index,
  email,
  address,
  number,
  secondNumber,
}: ContactCardProps) => {
  const useContext = useUser();
  const goTo = useNavigation<Props['navigation']>();

  const handleDelete = () => {
    useContext.deleteContact(index);
    useContext.fetchContacts();
  };

  const handleEdit = () => {
    goTo.navigate('Form', {
      name,
      role,
      img,
      index,
      email,
      address,
      number,
      secondNumber,
    });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.containerInfocontact}>
        <View style={styles.containerImg}>
          <Image style={styles.imgContact} source={{uri: img}} />
        </View>

        <View>
          <Text style={styles.nameContact}>{name}</Text>

          <Text style={styles.roleContact}>{role}</Text>
        </View>
      </View>
      <View style={styles.containerIcons}>
        <TouchableOpacity onPress={handleEdit}>
          <Icon name="pencil" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="trash-o" style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactCardComponent;
