import {useState} from 'react';
import {UserInfoInterface} from '../interface/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {avatars} from '../assets/avatars.data.ts';

interface Props extends NativeStackScreenProps<any, any>{}
const UseFormBegin = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [infoUser, setInfoUser] = useState<UserInfoInterface>();
  const [avatarSelected, setAvatarSelected] = useState<string>(avatars[0].img);

  const goTo = useNavigation<Props['navigation']>();

  const getInfoUser = async () => {
    if (!name || !phone || !email) {
      console.log('All fields are required');
      return;
    }
    setInfoUser({name, phone, email});

    goTo.navigate('ChooseAvatar', {name, phone, email});
  };

  const getInfoUserWithAvatar = async (user: UserInfoInterface) => {
    if (!img) {
      console.log('Choose a avatar');
    }

    await saveInfoUser(user);
  };

  const saveInfoUser = async (user: UserInfoInterface) => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(user));
      
      goTo.navigate('Home' as never);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = ({ name, email, phone, img }: UserInfoInterface) => {
    const newUser = { name, email, phone, img};
    
    getInfoUserWithAvatar(newUser); 
  };

  const onPress = (img: string) =>{
    setAvatarSelected(img)
    setImg(img)
  }

  return {
    name,
    phone,
    email,
    setName,
    setPhone,
    setEmail,
    img,
    infoUser,
    setImg,
    handleNext,
    validetInputs: getInfoUser,
    getInfoUserWithAvatar,
    avatarSelected,
    setAvatarSelected,
    onPress
  };
};

export default UseFormBegin;