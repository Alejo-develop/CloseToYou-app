import {
    Dimensions,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { ModalPhoto } from '../../interface/modals.interface';
  import ButtonGenericComponent from '../buttonGeneric/button.component';
  import Icon from 'react-native-vector-icons/FontAwesome';
  
  const {width} = Dimensions.get('screen');
  const {height} = Dimensions.get('screen');
  
  const ModalImg = ({visible, onClose}: ModalPhoto) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.containerBack}>
              <TouchableOpacity onPress={onClose}>
                <Icon name="arrow-left" style={{color: '#79169D', fontSize: height * 0.035}} />
              </TouchableOpacity>
            </View>
              <Text style={styles.title}>Avatars</Text>
            <View style={styles.containerButtons}>
              <ButtonGenericComponent text="Take Photo" />
              <ButtonGenericComponent text="Look galery" />
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
      paddingTop: height * 0.03,
      alignItems: 'center',
      gap: height * 0.02,
    },
    containerBack: {
      width: width * 0.8,
      justifyContent: 'flex-start',
      height: height * 0.035,
    },
    title: {
      fontSize: height * 0.03,
      fontWeight: 'bold',
      color: 'black',
    },
    containerAvatars: {
      width: width * 0.8,
      height: height * 0.21,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      borderWidth: 3,
      marginBottom: 20,
      gap: 10,
    },
    avatar: {
      width: width * 0.24,
      height: height * 0.093,
    },
    containerButtons: {
      flexDirection: 'row',
      gap: width * 0.04,
      marginTop: height * 0.04
    },
  });
  
  export default ModalImg;
  