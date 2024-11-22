import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: height * 0.96,
    width: width * 1,
    backgroundColor: '#79169D',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: height * 0.1,
    flex: 1
  },
  containerLogin: {
    width: width * 1,
    height: height * 0.595,
    backgroundColor: 'white',
    borderTopRightRadius: 160,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  errMessage: {
    color: '#79169D',
    fontSize: height * 0.02
  },
  chubb: {
    width: width * 0.6,
    height: height * 0.5,
    position: 'absolute',
    top: height * 0.09,
    elevation: 12,
    left: width * 0.02
  },
  header:{
    gap: 5
  },
  title: {
    fontSize: height * 0.036,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  titleSpan: {
    color: '#79169D',
  },
  subtitle: {
    fontSize: height * 0.026,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  containerInputs: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.25,
    gap: height * 0.025,
  },
  subtitleSpan: {
    color: 'black',
  },
  containerFooter: {
    gap: 10
  },
  text: {
    textAlign: 'center',
    color: 'black'
  },
  span: {
    textAlign: 'center',
    color: '#79169D',
  },
});
