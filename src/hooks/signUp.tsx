import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation.type';
import {SignUpInterface} from '../interface/user.interface';
import {useState} from 'react';
import {signUpService} from '../services/auth.services';
import {ErrorResponseInterface} from '../interface/auth.interface';

const SignUpHook = () => {
  const initialForm: SignUpInterface = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  const [form, setForm] = useState<SignUpInterface>(initialForm);
  const [error, setError] = useState<string>('');
  const goTo = useNavigation<RootStackParamList>();

  const handleFormChange = (field: keyof SignUpInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const goToLogin = () => {
    goTo.navigate('Login');
  };

  const register = async ({
    name,
    email,
    password,
    repeatPassword,
  }: SignUpInterface) => {
    try {
      if (password !== repeatPassword) {
        setError('The passwords must be same');
        return;
      }

      const res = await signUpService({name, email, password});

      goToLogin();
    } catch (err: any) {
      const apiError = err.response?.data as ErrorResponseInterface;
      if (apiError?.message) {
        setError(apiError.message); 
      } else {
        console.error(err); 
      }
    }
  };

  return {
    goToLogin,
    register,
    handleFormChange,
    form,
    error,
  };
};

export default SignUpHook;
