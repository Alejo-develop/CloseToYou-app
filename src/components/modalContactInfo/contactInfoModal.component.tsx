import {Image, Modal, Text, View} from 'react-native';
import {styles} from './style';
import {ModalContactInfoProps} from '../../interface/modals.interface';
import ButtonIconComponent from './childComponents/buttonsIcons.component';
import ButtonOkComponent from './childComponents/buttonOk.component';
import DeleteModalComponent from '../deleteModal/deleteModal.component';
import ContactCardHook from '../contactCardComponent/contactCard.hook';

const ContactInfoModalComponent = ({
  visible,
  onClose,
  id,
  name,
  number,
  role,
  secondNumber,
  email,
  address,
  img,
}: ModalContactInfoProps) => {
  const {
    handleEdit,
    handleDelete,
    showModalDelete,
    setIsModalVisible,
    isModalVisible,
    makePhoneCall
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
            <Image style={styles.img} source={{uri: img}} />
            <Text style={styles.textInfo}>{name}</Text>
            <Text style={styles.titleDetail}>{role}</Text>
          </View>

          <View style={styles.containerInfo}>
            <View style={styles.containerButtonsModal}>
              <ButtonIconComponent name="phone" onPress={() => makePhoneCall(number)}/>
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
                    number,
                    secondNumber,
                  })
                }
              />
              <ButtonIconComponent
                name="trash-o"
                onPress={() => showModalDelete(id)}
              />
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.containerDetailsContact}>
                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Phone:</Text>
                  <Text style={styles.detail}>{number}</Text>
                </View>

                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Second Phone:</Text>
                  <Text style={styles.detail}>{secondNumber}</Text>
                </View>

                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Email:</Text>
                  <Text style={styles.detail}>{email}</Text>
                </View>

                <View style={styles.containerDetail}>
                  <Text style={styles.titleDetail}>Address:</Text>
                  <Text style={styles.detail}>{address}</Text>
                </View>
              </View>

              <View style={styles.containerMap}>
                <Text style={styles.titleMap}>mapa</Text>
              </View>
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

