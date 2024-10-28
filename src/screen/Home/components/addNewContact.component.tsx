import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('screen');

type RootStackParamList = {
  Form: undefined;
};

const AddContactButtonComponent = () => {
  const goTo = useNavigation<NavigationProp<RootStackParamList>>()
  const onPress = () => {
    goTo.navigate('Form')
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>Add new contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderColor: '#79169D',
    borderRadius: 25,
    width: width * 0.5,
  },
  textButton: {
    textAlign: 'center',
    color: 'black',
  },
});

export default AddContactButtonComponent;
