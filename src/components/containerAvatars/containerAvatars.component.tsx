import {Image, TouchableOpacity, View} from 'react-native';
import {ContainerAvatarsProps} from '../../interface/containerAvatars.interface';
import { useState } from 'react';

const ContainerAvatarsComponent = ({
  styleContainer,
  styleAvatar,
  avatars,
  onPress,
}: ContainerAvatarsProps) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)

  const selectAvatar = (index: number, img: any) => {
    setIsSelected(index)

    onPress && onPress(index, img);
  }

  return (
    <View style={styleContainer}>
      {avatars.map((data, index) => (
        <TouchableOpacity
        style={ isSelected === index && { borderColor: '#79169D', borderWidth: 3 }}
          key={index}
          onPress={() => selectAvatar(index, data.img)}>
          <Image key={index} source={data.img} style={styleAvatar} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContainerAvatarsComponent;
