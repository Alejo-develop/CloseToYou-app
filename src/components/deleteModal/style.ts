import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  containerModal: {
    height: height * 0.535,
    width: width * 0.9,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: height * 0.01,
    elevation: 10
  },
  containerInfo: {
    padding: height * 0.049,
    alignItems: 'center'
  },
  textInfo: {
    fontSize: height * 0.018,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  spanInfo: {
    color: '#79169D'
  },
  containerButtons: {
    flexDirection: 'row',
    gap: width * 0.04,
  },
  img: {
    width: width * 0.5,
    height: height * 0.3,
  },
});
