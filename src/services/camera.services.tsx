import { Platform, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Dispatch, SetStateAction } from 'react';

export const selectImgService = async (
  setImg: Dispatch<SetStateAction<string | null>>,
) => {
  ImagePicker.launchImageLibrary({ mediaType: 'photo', quality: 1 }, async (response) => {
    if (response.didCancel) {
      return;
    }
    if (response.errorMessage) {
      return;
    }
    if (response.assets && response.assets.length > 0) {
      let uri = response.assets[0].uri ?? '';

     
      if (uri && uri.startsWith('content://')) {
        try {
          const newFileName = `${RNFS.CachesDirectoryPath}/${new Date().getTime()}.jpg`; 
          await RNFS.copyFile(uri, newFileName);  
          uri = newFileName; 
        } catch (error) {
          console.error('Error copying file from URI:', error);
          Alert.alert('Error', 'Unable to process the selected image');
          return;
        }
      }
      console.log('uri', uri);
      setImg(uri); // Establecer la nueva ruta de la imagen
    }
  });
};

export const takePhotoService = async (
  setImg: Dispatch<SetStateAction<string | null>>,
) => {
  const cameraPermission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA;

  try {
    const permissionStatus = await request(cameraPermission);

    if (permissionStatus === RESULTS.GRANTED) {
      const result = await ImagePicker.launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
        quality: 1,
      });

      if (result.didCancel) {
        return;
      }
      if (result.errorCode) {
        Alert.alert(
          'Camera Error',
          result.errorMessage || 'Failed to launch camera',
        );
        return;
      }
      if (result.assets && result.assets.length > 0) {
        let uri = result.assets[0].uri;

        // Verificar si la URI es de tipo "content://" (Android) y convertirla en una ruta accesible
        if (uri && uri.startsWith('content://')) {
          try {
            const newFileName = `${RNFS.CachesDirectoryPath}/${new Date().getTime()}.jpg`; // Nombre dinámico para evitar sobrescribir
            await RNFS.copyFile(uri, newFileName);  // Copiar archivo a una nueva ubicación accesible
            uri = newFileName; // Usamos la nueva ruta accesible
          } catch (error) {
            console.error('Error copying file from URI:', error);
            Alert.alert('Error', 'Unable to process the captured image');
            return;
          }
        }
        console.log('uri', uri);
        
        if(typeof uri === 'string'){
          setImg(uri); 
        }
      } else {
        Alert.alert('Error', 'No image was captured');
      }
    } else {
      handlePermissionDenied(permissionStatus);
    }
  } catch (error) {
    console.error('Failed to request camera permission', error);
    Alert.alert('Error', 'Failed to request camera permission');
  }
};

const handlePermissionDenied = (permissionStatus: string) => {
  if (permissionStatus === RESULTS.DENIED) {
    Alert.alert('Permission Denied', 'Camera permission is required');
  } else if (permissionStatus === RESULTS.BLOCKED) {
    Alert.alert(
      'Permission Blocked',
      'Camera permission is permanently denied. Please enable it from settings.',
    );
  }
};
