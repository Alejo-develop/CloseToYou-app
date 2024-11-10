import {useState} from 'react';
import {
  ContactInterface,
  CreateContactInterface,
} from '../interface/contacts.interface';
import {useAuth} from '../context/authContext';
import {useNavigation} from '@react-navigation/native';
import {
  saveContactService,
  updateContactService,
} from '../services/contacts.services';
import {selectImgService, takePhotoService} from '../services/camera.services';

const AddOrEditHook = (contactParams?: ContactInterface) => {
  const initialForm: CreateContactInterface = {
    name: contactParams?.name || '',
    secondName: contactParams?.secondName || '',
    lastName: contactParams?.lastName || '',
    role: contactParams?.role || '',
    phone: contactParams?.phone || '',
    secondPhone: contactParams?.secondPhone || '',
    email: contactParams?.email || '',
    address: contactParams?.address || '',
    img: contactParams?.img || '',
    latitude: contactParams?.latitude || null,
    longitude: contactParams?.longitude || null
  };

  const [img, setImg] = useState<string | null>(null);
  const [form, setForm] = useState<ContactInterface>(initialForm);
  const [imgSelected, setImgSelected] = useState<string | null>(
    contactParams?.img || img,
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isModalError, setIsModalError] = useState<boolean>(false);
  const [modalMap, setModalMap] = useState<boolean>(false);

  const handleFormChange = (field: keyof ContactInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };
  const auth = useAuth();
  const goTo = useNavigation();

  const handleSubmit = async (form: ContactInterface) => {
    const id = auth.getId();
    const token = await auth.getToken();

    if (form.name === '') {
      setIsModalError(true);
      return;
    }
    const newForm = {
      ...form,
      img: imgSelected ? imgSelected : '',
    };

    await saveContactService(id, newForm, token);
    goTo.goBack();
  };

  const afteChooseImg = async (source: string) => {
    if (source === 'camera') {
      await takePhotoService(setImg);
    }

    if (source === 'galery') {
      await selectImgService(setImg);
    }

    if (imgSelected) {
      handleFormChange('img', imgSelected);
    }
    setIsModalVisible(false);
  };

  const handleEdit = async (contactId: string, form: ContactInterface) => {
    const token = await auth.getToken();
    const userId = auth.getId();
    if (form.name) {
      const newForm = {
        ...form,
        img: imgSelected ? imgSelected : '',
      };
      console.log(newForm);
      
      await updateContactService(contactId, userId, newForm, token);
      goTo.goBack();
    }

    goTo.goBack();
  };

  const handleSaveLocation = (
    latitude: number,
    longitude: number,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {   
    handleFormChange('latitude', latitude);
    handleFormChange('longitude', longitude);
    setModalVisible(false);
  };

  return {
    form,
    setForm: handleFormChange,
    img,
    handleSubmit,
    handleEdit,
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
  };
};

export default AddOrEditHook;
