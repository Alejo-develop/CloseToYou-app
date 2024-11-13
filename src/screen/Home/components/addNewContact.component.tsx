import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

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
    backgroundColor: '#79169D', 
    borderRadius: 25,
    width: width * 0.37,
    paddingVertical: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, 
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: height * 0.014,
    letterSpacing: 0.8,
  },
});

export default AddContactButtonComponent;
