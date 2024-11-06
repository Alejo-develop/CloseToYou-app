import {Image, Text, View} from 'react-native';
import {styles} from './style';
import InputComponent from '../../components/inputGeneric/input.component';
import SignUpHook from '../../hooks/signUp';
import HeaderComponent from './components/header.component';
import FooterComponent from './components/footer.component';

const SignUpScreen = () => {
  const {goToLogin, register, handleFormChange, error, form} = SignUpHook();

  return (
    <View style={styles.container}>
      <Image
        style={styles.chubb}
        source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/flyWithPhone.png')}
      />
      <View style={styles.containerSignUp}>
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
            placeholder="Name"
            onChangeText={text => handleFormChange('name', text)}
          />
          <InputComponent
            placeholder="Email"
            onChangeText={text => handleFormChange('email', text)}
          />
          <InputComponent
            placeholder="Password"
            onChangeText={text => handleFormChange('password', text)}
            entry={true}
          />
          <InputComponent
            placeholder="Repeat Password"
            onChangeText={text => handleFormChange('repeatPassword', text)}
            entry={true}
          />
        </View>

        <FooterComponent
          form={form}
          goToLogin={goToLogin}
          register={() => register(form)}
          styleSpan={styles.span}
          styleContainerFooter={styles.containerFooter}
          styletext={styles.text}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
