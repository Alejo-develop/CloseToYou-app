import {Dimensions, StyleSheet} from 'react-native';

const { width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#79169D',
    padding: width * 0.02,
    width: width * 0.4,
    borderWidth: 2,
    borderRadius: 50
  },
  buttonContent: {
    textAlign: 'center',
    fontSize: width * 0.04,
    color: 'white',
  }
});
