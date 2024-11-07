import {Image, Text, View} from 'react-native';
import {styles} from './styleForm';
import InputComponent from '../../components/inputGeneric/input.component';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component';
import UseFormBegin from '../../hooks/useFormBegin';

const BeginForm = () => {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    validetInputs,
    setSecondNumber,
    setAddress,
    secondNumber,
    address,
  } = UseFormBegin();

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/chubbConstructor.png')}
      />

      <Text style={styles.titleScreen}>Let's start by taking some data before start...</Text>

      <View style={styles.containerInputs}>
        <InputComponent
          value={name}
          onChangeText={setName}
          placeholder="Second Name"
        />
        <InputComponent
          value={phone}
          onChangeText={setPhone}
          placeholder="Last Name"
        />
        <InputComponent
          value={email}
          onChangeText={setEmail}
          placeholder="Phone"
        />
        <InputComponent
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
        />
      </View>

      <ButtonGenericComponent text="Next" onPress={validetInputs} />
    </View>
  );
};

export default BeginForm;
