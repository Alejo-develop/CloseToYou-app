import {Image, Text, View} from 'react-native';
import styles from './style.ts';
import Icon from 'react-native-vector-icons/FontAwesome'
import { avatars } from '../../assets/avatars.data.ts';

const ContactCardComponent = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.containerImg}>
        <Image style={styles.imgContact} source={avatars[1].img}/>
      </View>

      <View>
        <Text style={styles.nameContact}>
            Damian Alejandro Garcia
        </Text>

        <Text style={styles.roleContact}>
            Esclavo
        </Text>
      </View>

      <View style={styles.containerIcons}>
        <Icon name='pencil' style={styles.icons}/>
        <Icon name='trash-o' style={styles.icons}/>
      </View>
    </View>
  );
};

export default ContactCardComponent;
