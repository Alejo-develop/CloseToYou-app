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
    borderBottomWidth: 20,
    borderBottomColor: '#79169D',
    borderTopWidth: 20,
    borderTopColor: '#79169D',
  },
  img: {
    width: 500,
    height: 500
  },
  titleScreen: {
    fontSize: 25,
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
