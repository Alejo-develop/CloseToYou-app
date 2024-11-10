import React, {useState} from 'react';
import {Modal, View, Text, Alert, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import ButtonGenericComponent from '../buttonGeneric/button.component';
interface MapModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (latitude: number, longitude: number) => void;
}

const MapModal: React.FC<MapModalProps> = ({visible, onClose, onSave}) => {
  const initialCoordinates = {latitude: 6.2442, longitude: -75.5812};

  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleMapPress = (event: any) => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    setSelectedLocation({latitude, longitude});
  };

  const handleSaveLocation = () => {
    if (selectedLocation) {
      onSave(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      Alert.alert('Please select a location on the map');
    }
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <MapView
          style={styles.map}
          onPress={handleMapPress}
          initialRegion={{
            latitude: initialCoordinates.latitude,
            longitude: initialCoordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {selectedLocation && (
            <Marker
              coordinate={selectedLocation}
              title="Selected Location"
              pinColor="black"
            />
          )}
        </MapView>

        {selectedLocation && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Selected Location:</Text>

            <View style={styles.buttonContainer}>
              <ButtonGenericComponent
                text="Save Location"
                onPress={handleSaveLocation}
              />
              <ButtonGenericComponent
                text="Close"
                onPress={onClose}
              />
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  map: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  card: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    right: '5%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    zIndex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 10,
    color: '#FFF',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#808b96',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: -10,
  },
});

export default MapModal;