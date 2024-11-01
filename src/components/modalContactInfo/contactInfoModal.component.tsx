import {Image, Modal, Text, View} from 'react-native';
import ButtonGenericComponent from '../buttonGeneric/button.component';
import {styles} from './style';
import {ModalContactInfoProps} from '../../interface/modals.interface';
import ButtonIconComponent from './childComponents/buttonsIcons.component';

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
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <View style={styles.containerInfo}>
            <Image style={styles.img} source={{uri: img}} />
            <Text style={styles.textInfo}>{name}</Text>
          </View>

          <View style={styles.containerButtonsModal}>
            <ButtonIconComponent />
            <ButtonIconComponent />
            <ButtonIconComponent />
            <ButtonIconComponent />
          </View>

          <View style={styles.containerButtonClose}>
            <ButtonGenericComponent text="Ok" saveContact={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ContactInfoModalComponent;
