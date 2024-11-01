import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const { width } = Dimensions.get('screen')
const { height } = Dimensions.get('screen')

const ButtonIconComponent = () => {
  return (
    <TouchableOpacity style={style.button}>
      <Text>Eliminar</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: height * 0.01,
    height: height * 0.065,
    width: width * 0.2,
    backgroundColor: 'white'
  },
});

export default ButtonIconComponent;
