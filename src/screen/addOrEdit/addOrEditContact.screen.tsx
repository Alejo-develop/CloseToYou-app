import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import InputComponent from '../../components/inputGeneric/input.component';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component';
import {useEffect} from 'react';
import AddOrEditHook from '../../hooks/addOrEdit';
import {useRoute} from '@react-navigation/native';
import {ContactInterface} from '../../interface/contacts.interface';
import GenereicModalComponent from '../../components/genericModal/genericModal.component';

const AddOrEditScreen = () => {
  const route = useRoute();
  const contactParams = route.params as ContactInterface | undefined;

  //Contiene estado para manejar la imagen en el hook
  const {
    img,
    setForm,
    form,
    handleEdit,
    handleNext,
    handleSubmit,
    imgSelected,
    setImgSelected,
    setIsModalVisible,
    isModalVisible
  } = AddOrEditHook(contactParams);

  useEffect(() => {
    setImgSelected(img);
  }, [img]);

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        {imgSelected === null ? (
          <TouchableOpacity style={styles.buttonSelectImg} onPress={handleNext}>
            <Text style={styles.textButtonSelectImg}>Add Photo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonSelect} onPress={handleNext}>
            <Image style={styles.imgSelected} source={{uri: imgSelected}} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.containerInputs}>
        <InputComponent
          placeholder={contactParams?.name ? contactParams?.name : `Full Name`}
          onChangeText={text => setForm('name', text)}
        />
        <InputComponent
          placeholder={contactParams?.number ? contactParams?.number : `Phone`}
          onChangeText={text => setForm('number', text)}
        />
        <InputComponent
          placeholder={
            contactParams?.role ? contactParams?.role : `How is for you`
          }
          onChangeText={text => setForm('role', text)}
        />
        <InputComponent
          placeholder={
            contactParams?.secondNumber
              ? contactParams?.secondNumber
              : `Second phone`
          }
          onChangeText={text => setForm('secondNumber', text)}
        />
        <InputComponent
          placeholder={contactParams?.email ? contactParams?.email : `Email`}
          onChangeText={text => setForm('email', text)}
        />
        <InputComponent
          placeholder={
            contactParams?.address ? contactParams?.address : `Address`
          }
          onChangeText={text => setForm('address', text)}
        />
      </View>

      <View style={styles.containerButtonConfirm}>
        <Image
          style={styles.imgButtonConfirm}
          source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/sorprise.png')}
        />
        <View>
          <ButtonGenericComponent
            text={!!contactParams?.name ? `Confirm Changes` : `Save`}
            saveContact={
              contactParams?.name
                ? () => handleEdit(form)
                : () => handleSubmit(form)
            }
          />

          <GenereicModalComponent visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
        </View>
      </View>
    </View>
  );
};

export default AddOrEditScreen;
