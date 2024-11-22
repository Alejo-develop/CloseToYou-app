import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { UserInfoInterface } from '../interface/user.interface';
import { updateUserService } from '../services/user.services';
import { selectImgService, takePhotoService } from '../services/camera.services';

const SettingsUserProfileHook = () => {
  const [user, setUser] = useState<UserInfoInterface | null>(null);
  const [imgUser, setImgUser] = useState<string | null>('');  // Imagen inicial vacía
  const [imgSelected, setImgSelected] = useState<string | null>(null);  // Imagen seleccionada
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isModalError, setModalError] = useState<boolean>(false);

  const auth = useAuth();

  const initialForm: UserInfoInterface = {
    name: user?.name || '',
    secondName: user?.secondName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    secondPhone: user?.secondPhone || '',
    email: user?.email || '',
    address: user?.address || '',
    img: user?.img || '',
  };

  const [form, setForm] = useState<UserInfoInterface>(initialForm);

  const handleFormChange = (field: keyof UserInfoInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const afteChooseImg = async (source: string) => {
    if (source === 'camera') {
      await takePhotoService(setImgUser);
    } 
    if (source === 'galery') {
      await selectImgService(setImgUser);
    }

    if (!imgUser) {
      setImgSelected(null);
    } else {
      setImgSelected(imgUser);  
    }
    
    setIsOpenModal(false);
  };

  const fetchUser = async () => {
    const user = await auth.getUser();
    setUser(user);
    setImgUser(user?.img || ''); 
  };

  const updateUser = async (_updatedUser: UserInfoInterface) => {
    const id = auth.getId();
    const token = await auth.getToken();
    console.log(_updatedUser);
    
    try {
      await updateUserService(id, _updatedUser, token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (form: UserInfoInterface) => {
    const newForm = {
      ...form,
      img: imgSelected || '', 
    };

    const filteredUser = Object.fromEntries(
      Object.entries(newForm).filter(([key, value]) => value !== undefined  || value !== ''),
    );

    if (Object.keys(filteredUser).length === 0) {
      setModalError(true);
      return;
    }
    await updateUser(newForm);
  };

  return {
    user,
    imgUser,
    setImgUser,
    auth,
    fetchUser,
    isOpenModal,
    setIsOpenModal,
    handleFormChange,
    form,
    handleSubmit,
    isModalError,
    setModalError,
    afteChooseImg,
    setImgSelected,
  };
};

export default SettingsUserProfileHook;
