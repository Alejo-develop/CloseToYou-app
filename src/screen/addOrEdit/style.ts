import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopWidth: 20,
    borderTopColor: '#79169D',
    gap: height * 0.02,
    padding: height * 0.02
  },
  containerImg: {
    borderWidth: 2,
    padding: 10,
    width: width * 0.6, 
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    borderColor: '#ccc', 
    backgroundColor: '#79169D', 
    alignItems: 'center',
    justifyContent: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 8, 
    elevation: 5, 
    overflow: 'hidden', 
  },
  buttonSelectImg: {
    width: width * 0.6, 
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'flex-start',
    marginRight: width * 0.03
  },
  imgButtonConfirm: {
    width: width * 0.32,
    height: height * 0.25,
    position: 'relative',
    bottom: height * 0.16,
    zIndex: -2,
    left: width * -0.06
  },
  imgSelected: {
    width: width * 0.6, 
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    borderWidth: 2
  },
  buttonSelect: {
    width: width * 0.57,
   
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    elevation: 1
  }
});
