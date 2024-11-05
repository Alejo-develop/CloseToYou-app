import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation.type';

const SignUpHook = () => {
  const goTo = useNavigation<RootStackParamList>();

  const goToLogin = () => {
    goTo.navigate('Login');
  };

  return {
    goToLogin,
  };
};

export default SignUpHook;
