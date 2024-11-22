import {Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import InputComponent from '../../components/inputGeneric/input.component';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component';
import {useEffect} from 'react';
import AddOrEditHook from '../../hooks/addOrEdit';
import {useRoute} from '@react-navigation/native';
import {ContactInterface} from '../../interface/contacts.interface';
import ModalImg from '../settingsUser/components/modalImg.component';
import GenereicModalComponent from '../../components/genericModal/genericModal.component';
import ButttonMapComponent from './components/buttonMap.component';
import MapModal from '../../components/modalMap/modalMap.component';

const AddOrEditScreen = () => {
  const route = useRoute();
  const contactParams = route.params as ContactInterface | undefined;

  //Contiene estado para manejar la imagen en el hook
  const {
    img,
    setForm,
    form,
    handleEdit,
    handleSubmit,
    imgSelected,
    setImgSelected,
    setIsModalVisible,
    isModalVisible,
    afteChooseImg,
    isModalError,
    setIsModalError,
    modalMap,
    setModalMap,
    handleSaveLocation
  } = AddOrEditHook(contactParams);

  useEffect(() => {
    setImgSelected(img);
  }, [img]);

  return (
    <KeyboardAvoidingView style={styles.container}>
       <ScrollView
        contentContainerStyle={styles.scrollView}>
      <View style={styles.containerImg}>
        {imgSelected === null ? (
          <TouchableOpacity
            style={styles.buttonSelectImg}
            onPress={() => setIsModalVisible(true)}>
            <Text style={styles.textButtonSelectImg}>Add Photo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonSelect}
            onPress={() => setIsModalVisible(true)}>
            <Image style={styles.imgSelected} source={contactParams?.img ? {uri: contactParams.img} : {uri: imgSelected}} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.containerInputs}>
        <InputComponent
          placeholder={contactParams?.name ? contactParams?.name : `Name`}
          onChangeText={text => setForm('name', text)}
        />

        <InputComponent
          placeholder={
            contactParams?.secondName
              ? contactParams?.secondName
              : `Second Name`
          }
          onChangeText={text => setForm('secondName', text)}
        />

        <InputComponent
          placeholder={
            contactParams?.lastName ? contactParams?.lastName : `Last Name`
          }
          onChangeText={text => setForm('lastName', text)}
        />

        <InputComponent
          placeholder={contactParams?.phone ? contactParams?.phone : `Phone`}
          onChangeText={text => setForm('phone', text)}
        />

        <InputComponent
          placeholder={
            contactParams?.role ? contactParams?.role : `How is for you`
          }
          onChangeText={text => setForm('role', text)}
        />
        <InputComponent
          placeholder={
            contactParams?.secondPhone
              ? contactParams?.secondPhone
              : `Second phone`
          }
          onChangeText={text => setForm('secondPhone', text)}
        />
        <InputComponent
          placeholder={contactParams?.email ? contactParams?.email : `Email`}
          onChangeText={text => setForm('email', text)}
        />
        <ButttonMapComponent
          text={contactParams?.address ? 'Edit Location' : 'Add Location'}
          onPress={() => setModalMap(true)}
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
            onPress={
              contactParams?.name
                ? () =>
                    handleEdit(contactParams.id ? contactParams.id : '', form)
                : () => handleSubmit(form)
            }
          />

          <ModalImg
            visible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            galery={() => afteChooseImg('galery')}
            takePhoto={() => afteChooseImg('camera')}
          />

          <GenereicModalComponent
            visible={isModalError}
            onClose={() => setIsModalError(false)}
            text="The contact must have a name"
          />
        </View>

        <MapModal
        visible={modalMap}
        onClose={() => setModalMap(false)}
        onSave={(latitude, longitude) => {
          handleSaveLocation(latitude, longitude, setModalMap);
        }}
      />
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddOrEditScreen;
