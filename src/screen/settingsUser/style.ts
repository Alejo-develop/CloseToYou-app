import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: '#79169D',
  },
  header: {
    backgroundColor: '#79169D',
    height: height * 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerImg: {
    width: width * 0.57,
    height: height * 0.25,
    backgroundColor: 'white',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    position: 'static',
    top: height * 0.04,
    borderWidth: 2,
    borderColor: '#79169D',
    elevation: 12,
  },
  imgUser: {
    width: width * 0.68,
    height: height * 0.256,
  },
  containerInfo: {
    backgroundColor: 'white',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    height: height * 0.7,
    elevation: 12,
    zIndex: -1,
    gap: height * 0.025,
    alignItems: 'center',
  },
  titleUserInfo: {
    textAlign: 'center',
    marginTop: height * 0.05, 
    fontSize: height * 0.033, 
    color: '#333', 
    fontWeight: '600', 
    textShadowColor: 'rgba(121, 22, 157, 0.2)', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5, 
    letterSpacing: 0.5,
  },
  containerDetails: {
    flexDirection: 'row',
    width: width * 1,
    height: height * 0.16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.04,
  },
  avatarImg:{
    width: width * 0.45,
    height: height * 0.236,
  }
});
