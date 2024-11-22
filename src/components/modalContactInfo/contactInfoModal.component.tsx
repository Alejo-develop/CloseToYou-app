import {Image, Modal, Text, View} from 'react-native';
import {styles} from './style';
import {ModalContactInfoProps} from '../../interface/modals.interface';
import ButtonIconComponent from './childComponents/buttonsIcons.component';
import ButtonOkComponent from './childComponents/buttonOk.component';
import DeleteModalComponent from '../deleteModal/deleteModal.component';
import ContactCardHook from '../contactCardComponent/contactCard.hook';
import MapView, { Marker } from 'react-native-maps';

const ContactInfoModalComponent = ({
  visible,
  onClose,
  id,
  name,
  phone,
  role,
  secondPhone,
  email,
  address,
  img,
  lastName,
  seconName,
  longitude,
  latitude,
}: ModalContactInfoProps) => {
  const {
    handleEdit,
    handleDelete,
    showModalDelete,
    setIsModalVisible,
    isModalVisible,
    makePhoneCall,
  } = ContactCardHook();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <View style={styles.containerHeader}>
            {img ? (
              <Image style={styles.img} source={{uri: img}} />
            ) : (
              <Image
                style={styles.img}
                source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/genericUserPhoto.png')}
              />
            )}
            <Text style={styles.textInfo}>
              {name} {seconName} {lastName}
            </Text>
            <Text style={styles.titleDetail}>{role}</Text>
          </View>

          <View style={styles.containerInfo}>
            <View style={styles.containerButtonsModal}>
              <ButtonIconComponent
                name="phone"
                onPress={() => makePhoneCall(phone)}
              />
              <ButtonIconComponent
                name="pencil"
                onPress={() =>
                  handleEdit({
                    name,
                    role,
                    img,
                    id,
                    email,
                    address,
                    phone,
                    secondPhone: secondPhone,
                    lastName,
                    secondName: seconName,
                  })
                }
              />
              <ButtonIconComponent
                name="trash-o"
                onPress={() => showModalDelete()}
              />
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.containerDetailsContact}>
                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Phone:</Text>
                  <Text style={styles.detail}>{phone ? phone : 'N/A'}</Text>
                </View>

                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Second Phone:</Text>
                  <Text style={styles.detail}>
                    {secondPhone ? secondPhone : 'N/A'}
                  </Text>
                </View>

                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Email:</Text>
                  <Text style={styles.detail}>{email ? email : 'N/A'}</Text>
                </View>

                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Address:</Text>
                  <Text style={styles.detail}>{address ? address : 'N/A'}</Text>
                </View>
              </View>

              {longitude && latitude ? (
                <View style={styles.mapContainer}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <Marker
                    coordinate={{latitude, longitude}}
                    title="Selected Location"
                    pinColor="black"
                  />
                </MapView>
              </View>
              ) : (
                <View style={styles.containerMap}>
                  <Text style={styles.titleMap}>Mapa Not Aviable</Text>
                </View>
              )}
            </View>
            <ButtonOkComponent text="Ok" onPress={onClose} />
          </View>

          <DeleteModalComponent
            visible={isModalVisible}
            contactName={name}
            onClose={() => setIsModalVisible(false)}
            onConfirm={() => handleDelete(id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ContactInfoModalComponent;
