import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: height * 0.04,
    borderTopWidth: 20,
    borderTopColor: '#79169D',
  },
  containerImg: {
    height: height * 0.35,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSelectImg: {
    backgroundColor: '#79169D',
    width: width * 0.57,
    height: height * 0.25,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2
  },
  textButtonSelectImg: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  containerInputs: {
    width: width * 1,
    alignItems: 'center',
    gap: 17,
  },
  containerButtonConfirm: {
    flexDirection: 'row',
    width: width * 1,
  },
  imgButtonConfirm: {
    width: width * 0.3,
    height: height * 0.3,
    position: 'relative',
    bottom: height * 0.20,
    zIndex: -1,
    marginLeft: 0.1,
  },
  imgSelected: {
    width: width * 0.57,
    height: height * 0.25,
    borderRadius: 100,
    borderWidth: 2
  },
  buttonSelect: {
    width: width * 0.57,
    height: height * 0.25,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2
  }
});
