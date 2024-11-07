import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation.type';
import { LoginInterface } from '../interface/user.interface';
import { useState } from 'react';
import { isFirstLaunchService, loginService } from '../services/auth.services';
import { ErrorResponseInterface } from '../interface/auth.interface';
import { useAuth } from '../context/authContext';

const LoginHook = () => {
  const initialForm: LoginInterface = {
    email: '',
    password: ''
  }
  const [form, setForm] = useState<LoginInterface>(initialForm)
  const [error, setError] = useState<string>('');
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(
    null,
  );

  const goTo = useNavigation<RootStackParamList>();

  const auth = useAuth()

  const handleFormChange = (field: keyof LoginInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const goToSignUp = () => {
    goTo.navigate('SignUp');
  };

  const login = async ({email, password}: LoginInterface) => {
    if(!email && !password){
      setError('All Inputs is required')
      return;
    }

    try {
      const res = await loginService({email, password})

      const token = res.data?.token
      auth.saveSessionInfo(token)
      setError('')

      await getIsFirstLaunch();

      if(isFirstLaunch === null){
        goTo.navigate('Begin')  
        return
      }

      goTo.navigate('Begin')
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponseInterface;
      if (apiError?.message) {
        setError(apiError.message); 
      } else {
        console.error(err); 
      }
    }
  }

  const getIsFirstLaunch = async () =>{
    const res = await isFirstLaunchService()

    setIsFirstLaunch(res)
  }

  return {
    goToSignUp,
    form,
    error,
    handleFormChange,
    login,
    getIsFirstLaunch
  };
};

export default LoginHook;
