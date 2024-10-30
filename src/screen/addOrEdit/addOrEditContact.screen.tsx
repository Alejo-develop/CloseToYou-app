import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import InputComponent from '../../components/inputGeneric/input.component';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component';
import {useEffect, useState} from 'react';
import AddOrEditHook from '../../hooks/addOrEdit';
import { useUser } from '../../context/userContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ContactInterface } from '../../interface/contacts.interface';

const AddOrEditScreen = () => {
  const {selectImg, img, setForm, form} = AddOrEditHook();
  const [imgSelected, setImgSelected] = useState<string | null>(img);
  const userContext = useUser()
  const goTo = useNavigation()
  const route = useRoute()

  const { id, name, number, address, email, secondNumber, img: imgPorfile, role } = route.params as ContactInterface

  const handleNext = () => {
    selectImg();
    setImgSelected(img);
  };

  const handleSubmit = async () => {
    await userContext.saveContact(form),
    goTo.navigate('Home' as never)
  }

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
        <InputComponent placeholder="Full Name" onChangeText={text => setForm('name', text)} />
        <InputComponent placeholder="Number" onChangeText={text => setForm('number', text)}/>
        <InputComponent placeholder="How is for you?" onChangeText={text => setForm('role', text)}/>
        <InputComponent placeholder="Second Number" onChangeText={text => setForm('secondNumber', text)}/>
        <InputComponent placeholder="Email" onChangeText={text => setForm('email', text)}/>
        <InputComponent placeholder="Address" onChangeText={text => setForm('address', text)}/>
      </View>

      <View style={styles.containerButtonConfirm}>
        <Image
          style={styles.imgButtonConfirm}
          source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/sorprise.png')}
        />
        <ButtonGenericComponent text="Confirmar" saveContact={handleSubmit}/>
      </View>
    </View>
  );
};

export default AddOrEditScreen;
