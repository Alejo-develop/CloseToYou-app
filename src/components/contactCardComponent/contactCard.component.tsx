import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style.ts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ContactCardProps} from '../../interface/contactCard.interface.ts';
import ContactCardHook from './contactCard.hook.tsx';
import DeleteModalComponent from '../deleteModal/deleteModal.component.tsx';
import ContactModalComponent from '../modalContactInfo/contactInfoModal.component.tsx';

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
  const {
    handleEdit,
    handleDelete,
    showModalDelete,
    setIsModalVisible,
    isModalVisible,
    setIsModalInfoVisible,
    isModalInfoVisible
  } = ContactCardHook();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => setIsModalInfoVisible(true)}>
      <TouchableOpacity style={styles.containerInfocontact} onPress={() => setIsModalInfoVisible(true)}>
        <View style={styles.containerImg}>
          <Image style={styles.imgContact} source={{uri: img}} />
        </View>

        <View>
          <Text style={styles.nameContact}>{name}</Text>

          <Text style={styles.roleContact}>{role}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerIcons}>
        <TouchableOpacity
          onPress={() =>
            handleEdit({
              name,
              role,
              img,
              id: index,
              email,
              address,
              number,
              secondNumber,
            })
          }>
          <Icon name="pencil" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showModalDelete(index)}>
          <Icon name="trash-o" style={styles.icons} />
        </TouchableOpacity>

        <DeleteModalComponent
          visible={isModalVisible}
          contactName={name}
          onClose={() => setIsModalVisible(false)}
          onConfirm={() => handleDelete(index)}
        />
         <ContactModalComponent visible={isModalInfoVisible} onClose={() => setIsModalInfoVisible(false)} name={name} id={index} number={number} role={role} secondNumber={secondNumber} email={email} address={address} img={img}/>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCardComponent;
