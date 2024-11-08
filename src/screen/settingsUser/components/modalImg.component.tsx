import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ModalPhoto} from '../../../interface/modals.interface';
import ButtonGenericComponent from '../../../components/buttonGeneric/button.component';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const ModalImg = ({visible, onClose, galery, takePhoto}: ModalPhoto) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
            <TouchableOpacity style={{alignSelf: 'flex-start', marginLeft: width * 0.03}} onPress={onClose}>
              <Icon name="arrow-left" style={{color: '#79169D', fontSize: height * 0.035, zIndex: 3}} />
            </TouchableOpacity>


          <Image style={styles.chubb} source={require('../../../assets/img/DrawKit_0091_Chubbs_Illustrations/stylePorfile.png')}/>
          <View style={styles.containerButtons}>
            <ButtonGenericComponent text="Take Photo" onPress={takePhoto}/>
            <ButtonGenericComponent text="Look galery" onPress={galery}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.95,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    height: height * 0.535,
    width: width * 0.9,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chubb: {
    width: width * 0.4,
    height: height * 0.4
  },
  containerButtons: {
    flexDirection: 'row',
    gap: width * 0.04,
  },
});

export default ModalImg;
