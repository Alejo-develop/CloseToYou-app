import {Image, Modal, Text, View} from 'react-native';
import {ModalGenericProps} from '../../interface/modals.interface';
import ButtonGenericComponent from '../buttonGeneric/button.component';
import {styles} from './style';

const DeleteModalComponent = ({
  visible,
  onClose,
  contactName,
  onConfirm
}: ModalGenericProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <View style={styles.containerInfo}>
            
            <Image
              style={styles.img}
              source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/idontcarechubb.png')}
            />
            <Text style={styles.textInfo}>Are you sure you want to eliminate <Text style={styles.spanInfo}>{contactName}</Text>?</Text>
          </View>

          <View style={styles.containerButtons}>
            <ButtonGenericComponent text="Back" saveContact={onClose} />
            <ButtonGenericComponent text="Confirm" saveContact={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModalComponent;
