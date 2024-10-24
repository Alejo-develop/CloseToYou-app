import {useState} from 'react';
import {UserInfoInterface} from '../interface/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const UseFormBegin = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [infoUser, setInfoUser] = useState<UserInfoInterface>();

  const goTo = useNavigation();

  const getInfoUser = async () => {
    if (!name || !phone || !email) {
      console.log('All fields are required');
      return;
    }

    const user: UserInfoInterface = {name, phone, email};
    setInfoUser(user);

    await saveInfoUser(user);
  };

  const saveInfoUser = async (user: UserInfoInterface) => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
      console.log('Contacts saved successfully:', user);
      goTo.navigate('ChooseAvatar' as never);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    name,
    phone,
    email,
    setName,
    setPhone,
    setEmail,
    validetInputs: getInfoUser,
  };
};

export default UseFormBegin;
