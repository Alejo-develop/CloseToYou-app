import {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {ContactInterface} from '../interface/contacts.interface';

const AddOrEditHook = () => {
  const [img, setImg] = useState<string | null>(null);
  const [form, setForm] = useState<ContactInterface>({
    id: 0,
    name: '',
    number: '',
    role: '',
    secondNumber: '',
    email: '',
    address: '',
    img: ''
  });

  const handleFormChange = (field: keyof ContactInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

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
          handleFormChange('img', uri)
        }
      },
    );
  };

  return {
    selectImg,
    form,
    setForm: handleFormChange,
    img
  };
};

export default AddOrEditHook;
