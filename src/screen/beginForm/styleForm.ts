import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderTopWidth: 20,
    borderTopColor: '#79169D',
    justifyContent: 'center'
  },
  img: {
    width: width * 0.5,
    height: height * 0.45
  },
  titleScreen: {
    fontSize: height * 0.02,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 25
  },
  containerInputs:{
    gap: 15,
    marginBottom: 35
  }
});
