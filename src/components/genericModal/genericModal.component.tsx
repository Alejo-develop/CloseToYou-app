import {Image, Modal, Text, View} from 'react-native';
import {ModalGenericProps} from '../../interface/modals.interface.ts';
import ButtonGenericComponent from '../buttonGeneric/button.component';
import {styles} from './style.ts';

const GenereicModalComponent = ({
  visible,
  onClose,
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
            <Text style={styles.textInfo}>The contact must have a name</Text>
          </View>

          <View style={styles.containerButtons}>
            <ButtonGenericComponent text="Ok" saveContact={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GenereicModalComponent;
