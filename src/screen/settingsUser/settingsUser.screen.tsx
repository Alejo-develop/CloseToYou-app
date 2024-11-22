import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style.ts';
import SettingsUserProfileHook from '../../hooks/settingsUserProfile.hook.tsx';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import DetailCard from './components/cardDetail.component.tsx';
import ButtonGenericComponent from '../../components/buttonGeneric/button.component.tsx';
import ModalImg from './components/modalImg.component.tsx';
import GenereicModalComponent from '../../components/genericModal/genericModal.component.tsx';

const SettingsPorfileScreen = () => {
  const { user, imgUser, fetchUser, setIsOpenModal, setModalError, afteChooseImg, setImgSelected, isModalError, isOpenModal, handleFormChange, form, handleSubmit } = SettingsUserProfileHook();

  useFocusEffect(
    useCallback(() => {
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
                ? { uri: imgUser }
                : require('../../assets/img/DrawKit_0091_Chubbs_Illustrations/genericUserPhoto.png')  
            }
            style={imgUser ? styles.imgUser : styles.avatarImg}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.titleUserInfo}>{user?.name} {user?.secondName} {user?.lastName}</Text>
            
        <View style={styles.containerDetails}>
          <DetailCard onChangeText={text => handleFormChange('phone', text)} title='Phone' subtitle={user?.phone} />
          <DetailCard onChangeText={text => handleFormChange('email', text)} title='Email' subtitle={user?.email} />
        </View>

        <View style={styles.containerDetails}>
          <DetailCard onChangeText={text => handleFormChange('secondPhone', text)} title='Second Phone' subtitle={user?.secondPhone ? user?.secondPhone : 'N/A'} />
          <DetailCard onChangeText={text => handleFormChange('address', text)} title='Address' subtitle={user?.address ? user?.address : 'N/A'} />
        </View>
        
        <ButtonGenericComponent text='Confirm' onPress={() => handleSubmit(form)} />

        <ModalImg
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          galery={() => afteChooseImg('galery')}
          takePhoto={() => afteChooseImg('camera')}
        />

        <GenereicModalComponent text='Nothing to change' onClose={() => setModalError(false)} visible={isModalError} />
      </View>
    </View>
  );
};

export default SettingsPorfileScreen;
