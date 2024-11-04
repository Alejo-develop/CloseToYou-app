import {useState} from 'react';
import {useUser} from '../context/userContext';
import {UserInfoInterface} from '../interface/user.interface';

const SettingsUserProfileHook = () => {
  const [user, setUser] = useState<UserInfoInterface | null>();
  const [imgUser, setImgUser] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const userContext = useUser();

  const fetchUser = async () => {
    const user = await userContext.getUser();
    setUser(user);
    setImgUser(user?.img || '');
  };

  return {
    user,
    imgUser,
    setImgUser,
    userContext,
    fetchUser,
    isOpenModal,
    setIsOpenModal
  };
};

export default SettingsUserProfileHook;
