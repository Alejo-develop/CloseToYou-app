import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './stylesChooseAvatar';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component';
import {avatars} from '../../assets/avatars.data.ts';
import UseFormBegin from '../../hooks/useFormBegin.tsx';
import { useRoute } from '@react-navigation/native';
import { UserInfoInterface } from '../../interface/user.interface.ts';

const ChooseYourAvatar = () => {
  const {img, handleNext, avatarSelected, onPress} = UseFormBegin()
  const route = useRoute()
  const { name, email, phone } = route.params as UserInfoInterface

  const onNextPress = () => {
    handleNext({name, email, phone, img });
  };


  return (
    <View style={styles.container}>
      <View style={styles.containerUserAvatar}>
        <Text style={styles.h1}>
          Choose your <Text style={styles.h1_span}>Avatar</Text>
        </Text>
        <View style={styles.containerAvatar}>
          <Image style={styles.avatar} source={avatarSelected as any} />
        </View>
      </View>

      <View style={styles.containerAvatars}>
        {avatars.map((data, index) => (
          <TouchableOpacity key={index.toString()}
          onPress={() => onPress(data.img)}>
            <Image
              key={index}
              source={data.img}
              style={styles.avatarsSelect}
            />
          </TouchableOpacity>
        ))}
      </View>

      <ButtonGenericComponent text="Next" saveContact={onNextPress} />
    </View>
  );
};

export default ChooseYourAvatar;
