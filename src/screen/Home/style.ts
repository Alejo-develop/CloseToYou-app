import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: 'white',
    borderTopWidth: 20,
    borderTopColor: '#79169D',
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
  },
  containerItemsHeader: {
    alignItems: 'center',
    gap: 15,
  },
  img: {
    width: width * 0.2,
    height: height * 0.2,
  },
  titleSectionContact: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  titleSectionContactSpan: {
    color: '#79169D',
  },
  containerContacts: {
    height: height * 0.73,
    alignItems: 'center',
    padding: height * 0.05,
  },
  containerNotContactsAviable: {
    height: height * 0.73,
    alignItems: 'center'
  },
  imgNoContactsAviable: {
    width: width * 0.6,
    height: height * 0.6,
  },
  textNoContactsAviable: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#000000'
  },
  spamNoContacts:{
    color: '#79169D'
  }
});
