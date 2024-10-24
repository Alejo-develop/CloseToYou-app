import {StyleSheet} from 'react-native';

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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Itim',
  },
  span: {
    color: '#79169D',
    fontSize: 30,
  },
  slogan: {
    fontSize: 15,
    color: '#000000',
  },
  img: {
    width: 500,
    height: 500,
  },
  secondScreen: {
    alignItems: 'center'
  },
  titleScondScreen: {
    fontSize: 30,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#000000'
  },
  description: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'center'
  },
  spanDescription: {
    color: '#79169D',
    fontSize: 15,
  },
});
