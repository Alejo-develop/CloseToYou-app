import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('screen');

const AddContactButtonComponent = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
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
