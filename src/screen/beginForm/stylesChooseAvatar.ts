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
  },
  containerUserAvatar: {
    width: width * 0.8,
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  containerAvatar: {
    borderWidth: 3,
    padding: 10,
    width: width * 0.7,
    borderRadius: 200,
    alignItems: 'center',
    marginBottom: 0
  },
  avatar: {
    width: width * 0.5,
    height: height * 0.3,
  },
  h1: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Itim',
  },
  h1_span: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    color: '#79169D',
    fontFamily: 'Itim',
  },
  containerAvatars: {
    width: width * 0.8,
    height: height * 0.21,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderWidth: 3,
    paddingTop: 5,
    marginBottom: 20,
    gap: 10
  },
  avatarsSelect: {
    width: 90,
    height: height * 0.09,
  },
});
