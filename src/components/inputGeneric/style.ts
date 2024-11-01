import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    width: width * 0.65,
    height: 45,
    color: '#333',
    backgroundColor: '#f9f9f9',
    borderColor: '#79169D',
    fontSize: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  inputFocused: {
    borderColor: '#0d6efd', 
  },
});