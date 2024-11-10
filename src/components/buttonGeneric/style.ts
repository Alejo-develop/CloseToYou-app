import {Dimensions, StyleSheet} from 'react-native';

const { width } = Dimensions.get('screen')
const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#79169D',
    paddingVertical: height * 0.014,
    paddingHorizontal: width * 0.042,
    width: width * 0.40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
  },
  buttonContent: {
    textAlign: 'center',
    fontSize: height * 0.016,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
