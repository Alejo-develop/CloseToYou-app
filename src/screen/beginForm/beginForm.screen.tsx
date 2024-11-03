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

      <Text style={styles.titleScreen}>Let's start by taking some data...</Text>

      <View style={styles.containerInputs}>
        <InputComponent
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <InputComponent
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone"
        />
        <InputComponent
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <InputComponent
          value={secondNumber}
          onChangeText={setSecondNumber}
          placeholder="Second Phone"
        />
        <InputComponent
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
        />
      </View>

      <ButtonGenericComponent text="Next" saveContact={validetInputs} />
    </View>
  );
};

export default BeginForm;
