import {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {ContactInterface} from '../interface/contacts.interface';
import {useAuth} from '../context/authContext';
import {useNavigation} from '@react-navigation/native';

const AddOrEditHook = (contactParams?: ContactInterface) => {
  const initialForm: ContactInterface = {
    id: contactParams?.id || 0,
    name: contactParams?.name || '',
    number: contactParams?.number || '',
    role: contactParams?.role || '',
    secondNumber: contactParams?.secondNumber || '',
    email: contactParams?.email || '',
    address: contactParams?.address || '',
    img: contactParams?.img || ''
  };

  const [img, setImg] = useState<string | null>(null);
  const [form, setForm] = useState<ContactInterface>(initialForm);
  const [imgSelected, setImgSelected] = useState<string | null>(contactParams?.img || img);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleFormChange = (field: keyof ContactInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };
  const userContext = useAuth();
  const goTo = useNavigation();

  const selectImg = () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'photo', quality: 1},
      (response: ImagePicker.ImagePickerResponse) => {
        if (response.didCancel) {
          return;
        }
        if (response.errorMessage) {
          return;
        }
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri ?? '';
          setImg(uri);
          handleFormChange('img', uri);
        }
      },
    );
  };

  const handleSubmit = async (form: ContactInterface) => {
    if (form.name === '') {
      setIsModalVisible(true);
      return 
    }
    await userContext.saveContact(form)
    goTo.goBack();

  };

  const handleEdit = async (form: ContactInterface) => {
    if (form.name) {
      await userContext.editContact(form) 
      goTo.goBack();
    }

    goTo.goBack();
  };

  const handleNext = () => {
    selectImg();
    setImgSelected(img);
  };


  return {
    selectImg,
    form,
    setForm: handleFormChange,
    img,
    handleSubmit,
    handleEdit,
    handleNext,
    imgSelected,
    setImgSelected,
    setIsModalVisible,
    isModalVisible
  };
};

export default AddOrEditHook;
