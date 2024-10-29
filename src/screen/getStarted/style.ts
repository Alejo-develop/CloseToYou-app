import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 20,
    borderBottomColor: '#79169D',
    borderTopWidth: 20,
    borderTopColor: '#79169D',
    paddingBottom: 100
  },
  firstScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    padding: 0,
  },
  companyName: {
    alignItems: 'center',
  },
  h1: {
    fontSize: height * 0.025,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Itim',
  },
  span: {
    color: '#79169D',
    fontSize: height * 0.025,
  },
  slogan: {
    fontSize: 15,
    color: '#000000',
  },
  img: {
    width: width * 0.85,
    height: height * 0.5
  },
  secondScreen: {
    alignItems: 'center'
  },
  titleScondScreen: {
    fontSize: height * 0.025,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#000000'
  },
  description: {
    fontSize: height * 0.015,
    color: '#000000',
    textAlign: 'center'
  },
  spanDescription: {
    color: '#79169D',
    fontSize: height * 0.015,
  },
});
