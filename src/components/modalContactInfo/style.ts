import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  containerModal: {
    height: height * 0.8,
    width: width * 1,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: height * 0.01,
    elevation: 10
  },
  containerInfo: {
    paddingTop: height * 0.04,
    alignItems: 'center',
    marginBottom: 4
  },
  textInfo: {
    fontSize: height * 0.028,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  containerButtonClose: {
    flexDirection: 'row',
    gap: width * 0.04,
  },
  img: {
    width: width * 0.25,
    height: height * 0.1,
    marginBottom: height * 0.02
  },
  containerButtonsModal: {
    width: width * 1,
    height: height * 0.09,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#79169D'
  }
});
