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
    height: height * 0.9,
    width: width * 1,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: height * 0.01,
    elevation: 10
  },
  containerHeader: {
    paddingTop: height * 0.04,
    alignItems: 'center',
    marginBottom: 7
  },
  textInfo: {
    fontSize: height * 0.028,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  img: {
    width: width * 0.25,
    height: height * 0.105,
    marginBottom: height * 0.02,
    borderRadius: 100,
  },
  containerButtonsModal: {
    width: width * 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerInfo: {
    backgroundColor: '#79169D',
    width: width * 1,
    height: height * 0.58,
    marginTop: height * -0.010,
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.05,
  },
  cardInfo: {
    width: width * 0.9,
    height: height * 0.3,
    borderColor: '#79169D',
    elevation: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    backgroundColor: '#f9f9f9',
    alignContent: 'center',
  },
  containerDetailsContact: {
    height: height * 0.13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: 10,
    marginBottom: 4,
    justifyContent: 'center',
  },
  containerDetail:{
    borderBottomWidth: 1,
    borderBottomColor: '#79169D',
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    
  },
  titleDetail: {
    color: '#79169D',
    fontWeight: 'medium',
    textAlign: 'center'
  },
  detail: {
    fontSize: height * 0.015,
    width: width * 0.35,
    textAlign: 'center',
    color: 'black',
  },
  containerMap: {
    backgroundColor: 'black',
    height: height * 0.2,
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleMap: {
    color: 'white',
    fontWeight: 'bold'
  },
  mapContainer: {
    width: width * 0.9,
    height: height * 0.2,
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12,
    overflow: 'hidden',
  },
  map: {
    width: width * 0.9,
    height: height * 0.2,
  }
});
