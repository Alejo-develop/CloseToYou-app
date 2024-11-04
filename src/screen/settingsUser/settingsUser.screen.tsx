import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style.ts';
import SettingsUserProfileHook from '../../hooks/settingsUserProfile.hook.tsx';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import DetailCard from './components/cardDetail.component.tsx';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component.tsx';
import ModalImg from './components/modalImg.component.tsx';

const SettingsPorfileScreen = () => {
  const {user, imgUser, fetchUser, setIsOpenModal, isOpenModal} = SettingsUserProfileHook();

  useFocusEffect(
    useCallback(() => {
      console.log('Current imgUser value:', imgUser);
      fetchUser();
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsOpenModal(true)} style={styles.containerImg}>
          <Image
            source={
              imgUser
                ? typeof imgUser === 'string'
                  ? {uri: imgUser}
                  : imgUser
                : require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/genericUserPhoto.png')
            }
            style={ imgUser
              ? typeof imgUser === 'string' ? styles.imgUser : styles.avatarImg : styles.imgUser}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.titleUserInfo}>{user?.name}</Text>
            
        <View style={styles.containerDetails}>
          <DetailCard title='Phone' subtitle={user?.phone}/>
          <DetailCard title='Email' subtitle={user?.email}/>
        </View>

        <View style={styles.containerDetails}>
          <DetailCard title='Second Phone' subtitle={user?.secondNumber ? user?.secondNumber : 'N/A'}/>
          <DetailCard title='Address' subtitle={user?.address ? user?.address : 'N/A'}/>
        </View>
        
        <ButtonGenericComponent text='Confirm' />

        <ModalImg
        visible={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        />
      </View>
    </View>
  );
};

export default SettingsPorfileScreen;
