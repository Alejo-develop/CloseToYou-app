import {Image, TouchableOpacity, View} from 'react-native';
import {ContainerAvatarsProps} from '../../interface/containerAvatars.interface';

const ContainerAvatarsComponent = ({
  styleContainer,
  styleAvatar,
  avatars,
  onPress,
}: ContainerAvatarsProps) => {
  return (
    <View style={styleContainer}>
      {avatars.map((data, index) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={() => onPress && onPress(index, data.img)}>
          <Image key={index} source={data.img} style={styleAvatar} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContainerAvatarsComponent;
