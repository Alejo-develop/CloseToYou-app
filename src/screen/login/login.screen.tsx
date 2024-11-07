import {Image, Text, View} from 'react-native';
import {styles} from './style.ts';
import InputComponent from '../../components/inputGeneric/input.component.tsx';
import LoginHook from '../../hooks/login.tsx';
import HeaderComponent from './components/header.component.tsx';
import FooterComponent from './components/footer.component.tsx';
import { useEffect } from 'react';

const LoginScreen = () => {
  const {goToSignUp, form, error, handleFormChange, login, getIsFirstLaunch} = LoginHook();

  useEffect(() => {
    getIsFirstLaunch();
  }, []);


  return (
    <View style={styles.container}>
      <Image
        style={styles.chubb}
        source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/walkChubb.png')}
      />
      <View style={styles.containerLogin}>
        <HeaderComponent
          styleHeader={styles.header}
          styleTitle={styles.title}
          styleTitleSpan={styles.titleSpan}
          styleSubtitle={styles.subtitle}
          styleSubtitleSpan={styles.subtitleSpan}
        />

        <View style={styles.containerInputs}>
          {error && <Text style={styles.errMessage}>{error} :(</Text>}
          <InputComponent
            placeholder="Email"
            onChangeText={text => handleFormChange('email', text)}
          />
          <InputComponent
            placeholder="Password"
            onChangeText={text => handleFormChange('password', text)}
            entry={true}
          />
        </View>

        <FooterComponent
          form={form}
          goToSignUp={goToSignUp}
          login={() => login(form)}
          styleSpan={styles.span}
          styleContainerFooter={styles.containerFooter}
          styletext={styles.text}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
