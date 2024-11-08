import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 20,
    borderTopColor: '#79169D',
    gap: height * 0.05
  },
  containerImg: {
    borderWidth: 2,
    padding: 10,
    width: width * 0.6, 
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
    borderColor: '#ccc', 
    backgroundColor: '#f2f2f2', 
    alignItems: 'center',
    justifyContent: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 8, 
    elevation: 5, 
    overflow: 'hidden', 
    marginBottom: 20,
  },
  img: {
    width: width * 0.6, 
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2,
  },
  h1: {
    fontSize: height * 0.025,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Itim',
  },
  h1_span: {
    fontSize: height * 0.025,
    fontWeight: 'bold',
    color: '#79169D',
    fontFamily: 'Itim',
  }
});
