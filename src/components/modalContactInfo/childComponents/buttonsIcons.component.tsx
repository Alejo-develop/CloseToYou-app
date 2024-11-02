import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('screen')
const { height } = Dimensions.get('screen')

interface Props{
  name: string;
  onPress?: () => void;
}

const ButtonIconComponent = ({name, onPress}: Props) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Icon name={name} style={style.icon}/>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    padding: height * 0.01,
    height: height * 0.065,
    width: width * 0.2,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon:{
    fontSize: height * 0.035,
    color: '#79169D'
  }
});

export default ButtonIconComponent;
