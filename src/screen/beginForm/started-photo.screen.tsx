import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './stylesPhoto.ts';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component.tsx';
import UseFormBegin from '../../hooks/useFormBegin.tsx';
import {useRoute} from '@react-navigation/native';
import {UserInfoInterface} from '../../interface/user.interface.ts';
import ModalImg from '../settingsUser/components/modalImg.component.tsx';

const ChooseYourAvatar = () => {
  const {img, handleNext, isOpenModal, setIsOpenModal, setImg, afteChooseImg} =
    UseFormBegin();
  const route = useRoute();
  const {
    lastName = '',
    phone = '',
    address = '',
    secondName = '',
  } = (route.params || {}) as Partial<UserInfoInterface>;

  const onNextPress = () => {
    handleNext({lastName, phone, address, secondName});
  };

  return (
    <View style={styles.container}>
      {img === null ? (
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => setIsOpenModal(true)}>
          <Text style={styles.h1}>
            Add <Text style={styles.h1_span}>Photo!</Text>
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => setIsOpenModal(true)}>
          <Image source={{uri: img}}
          style={styles.img}/>
        </TouchableOpacity>
      )}

      <ButtonGenericComponent text="Next" onPress={onNextPress} />
      <ModalImg
        visible={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        galery={() => afteChooseImg('galery')}
        takePhoto= {() =>afteChooseImg('camera')}
      />
    </View>
  );
};

export default ChooseYourAvatar;
