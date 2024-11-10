import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style.ts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ContactCardProps } from '../../interface/contactCard.interface.ts';
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
  secondPhone,
  seconName,
  lastName,
  longitude,
  latitude
}: ContactCardProps) => {
  const {
    handleEdit,
    handleDelete,
    showModalDelete,
    setIsModalVisible,
    isModalVisible,
    setIsModalInfoVisible,
    isModalInfoVisible,
  } = ContactCardHook();

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => setIsModalInfoVisible(true)}>
      <TouchableOpacity style={styles.containerInfocontact} onPress={() => setIsModalInfoVisible(true)}>
        <View style={styles.containerImg}>
          {img ? (
           <Image style={styles.imgContact} source={{ uri: img }} /> 
          ):(

          <Image style={styles.imgContact} source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/genericUserPhoto.png')} />
          )}
          </View>

        <View>
          <Text style={styles.nameContact}>{name}</Text>
          <Text style={styles.roleContact}>{role ? role : 'Friend'}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.containerIcons}>
        <TouchableOpacity
          onPress={() =>
            handleEdit({
              name,
              role: role,
              img,
              id: index,
              email,
              address,
              phone: number,
              secondPhone: secondPhone,
              lastName,
              secondName: seconName,
              longitude,
              latitude
            })
          }>
          <Icon name="pencil" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showModalDelete()}>
          <Icon name="trash-o" style={styles.icons} />
        </TouchableOpacity>

        <DeleteModalComponent
          visible={isModalVisible}
          contactName={name}
          onClose={() => setIsModalVisible(false)}
          onConfirm={() => handleDelete(index)}
        />
        <ContactModalComponent
          visible={isModalInfoVisible}
          onClose={() => setIsModalInfoVisible(false)}
          name={name}
          id={index}
          phone={number}
          role={role}
          secondPhone={secondPhone}
          seconName={seconName}
          lastName={lastName}
          email={email}
          address={address}
          img={img}
          longitude={longitude}
          latitude={latitude}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ContactCardComponent;

