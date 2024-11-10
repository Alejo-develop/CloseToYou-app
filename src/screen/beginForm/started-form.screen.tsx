import {Image, Text, View} from 'react-native';
import {styles} from './styleForm';
import InputComponent from '../../components/inputGeneric/input.component';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component';
import UseFormBegin from '../../hooks/useFormBegin';

const BeginForm = () => {
  const {
    phone,
    setPhone,
    validetInputs,
    setAddress,
    address,
    lastName,
    setLastName,
    secondName,
    setSecondName,
  } = UseFormBegin();

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/chubbConstructor.png')}
      />

      <Text style={styles.titleScreen}>
        Let's start by taking some data before start...
      </Text>

      <View style={styles.containerInputs}>
        <InputComponent
          value={secondName}
          onChangeText={setSecondName}
          placeholder="Second Name"
        />
        <InputComponent
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
        />
        <InputComponent
          value={phone}
          onChangeText={setPhone}
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