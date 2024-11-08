import {useState} from 'react';
import {UserInfoInterface} from '../interface/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAuth} from '../context/authContext.tsx';
import {updateUserService} from '../services/user.services.tsx';
import { selectImgService, takePhotoService } from '../services/camera.services.tsx';

interface Props extends NativeStackScreenProps<any, any> {}
const UseFormBegin = () => {
  const [secondName, setSecondName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [imgSelected, setImg] = useState<string | null>(null);
  const [infoUser, setInfoUser] = useState<UserInfoInterface>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const goTo = useNavigation<Props['navigation']>();
  const auth = useAuth();

  const getInfoUser = async () => {
    setInfoUser({lastName, phone, address, secondName});

    goTo.navigate('ChooseAvatar', {lastName, phone, address, secondName});
  };

  const afteChooseImg = async (source: string) => {
    if(source === 'camera'){
      await takePhotoService(setImg)
    }

    if(source === 'galery'){
      selectImgService(setImg)
    }

    setIsOpenModal(false)
  }
  
  const updateUser = async (updatedUser: UserInfoInterface) => {
    const id = auth.getId();
    const token = await auth.getToken();
    console.log('Sending data to backend:', updatedUser); 
    
    try {
      const res = await updateUserService(id, updatedUser, token);
      // await AsyncStorage.setItem('onboardingCompleted', 'true');
      
      goTo.navigate('Main');
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleNext = async ({
    lastName,
    phone,
    address,
    secondName,
  }: UserInfoInterface) => {
    const updatedUser: UserInfoInterface = {
      lastName: lastName || undefined,
      img: imgSelected || undefined,
      phone: phone || undefined,
      address: address || undefined,
      secondName: secondName || undefined,
    };

    const filteredUser = Object.fromEntries(
      Object.entries(updatedUser).filter(([key, value]) => value !== undefined),
    );

    console.log('filtered', filteredUser);
    

    if (Object.keys(filteredUser).length === 0) {
      console.log('filtered', filteredUser);
     
      goTo.navigate('Main');
      return; 
    }

    await updateUser(filteredUser);
  };
  
  return {
    phone,
    setLastName,
    lastName,
    setPhone,
    secondName,
    setSecondName,
    address,
    setAddress,
    img: imgSelected,
    infoUser,
    setImg,
    handleNext,
    validetInputs: getInfoUser,
    isOpenModal,
    setIsOpenModal,
    afteChooseImg
  };
};

export default UseFormBegin;
