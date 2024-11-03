import {Image, Text, View} from 'react-native';
import {styles} from './style.ts';
import SettingsUserProfileHook from '../../hooks/settingsUserProfile.hook.tsx';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

const SettingsPorfileScreen = () => {
  const {user, imgUser, fetchUser} = SettingsUserProfileHook();

  useFocusEffect(
    useCallback(() => {
      console.log('Current imgUser value:', imgUser);
      fetchUser();
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={
            imgUser
              ? typeof imgUser === 'string'
                ? {uri: imgUser}
                : imgUser
              : require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/genericUserPhoto.png')
          }
          style={{
            width: 500,
            height: 500,
          }}
        />
      </View>

      <View style={styles.containerInfo}></View>
    </View>
  );
};

export default SettingsPorfileScreen;
