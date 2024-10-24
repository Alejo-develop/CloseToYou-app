import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    input: {
      borderWidth: 2,
      width: width * 0.6,
      height: 40,
      color: '#000000',
      textDecorationColor: '#000000',
      fontSize: 15,
      textAlign: 'center',
      borderRadius: 18,
    },
  });