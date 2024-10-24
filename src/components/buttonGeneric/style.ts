import {Dimensions, StyleSheet} from 'react-native';

const { width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#79169D',
    padding: 12,
    width: width * 0.4,
    borderWidth: 2,
    borderRadius: 50
  },
  buttonContent: {
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  }
});
