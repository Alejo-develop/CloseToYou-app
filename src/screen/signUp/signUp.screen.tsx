import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import InputComponent from '../../components/inputGeneric/input.component';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component';
import SignUpHook from '../../hooks/signUp';

const SignUpScreen = () => {
    const { goToLogin } = SignUpHook()

  return (
    <View style={styles.container}>
      <Image
        style={styles.chubb}
        source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/flyWithPhone.png')}
      />
      <View style={styles.containerSignUp}>
        <View style={styles.header}>
          <Text style={styles.title}>
            CloseTo<Text style={styles.titleSpan}>You</Text>
          </Text>
          <Text style={styles.subtitle}>
            Sign<Text style={styles.subtitleSpan}>Up</Text>
          </Text>
        </View>
        
        <View style={styles.containerInputs}>
          <InputComponent placeholder="Name" />
          <InputComponent placeholder="Email" />
          <InputComponent placeholder="Password" />
          <InputComponent placeholder="Repeat Password" />
        </View>

        <View style={styles.containerFooter}>
          <ButtonGenericComponent text="Sign Up" />
          <View>
            <Text style={styles.text}>Already have account?</Text>

            <TouchableOpacity onPress={goToLogin}>
              <Text style={styles.span}>Sign in!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
};

export default SignUpScreen;
