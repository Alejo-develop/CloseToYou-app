import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

interface CardDetailProps {
  title: string;
  subtitle: string | undefined;
  onChangeText?: (text: string) => void;
  value?: string
}

const DetailCard = ({title, subtitle, onChangeText, value}: CardDetailProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder={subtitle}
        onChangeText={onChangeText}
        placeholderTextColor={'black'}
        editable={true}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.44,
    height: height * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(121, 22, 157, 0.5)',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    gap: height * 0.01,
  },
  title: {
    fontSize: height * 0.02,
    color: '#79169D',
    fontWeight: 'bold',
    textShadowColor: 'rgba(121, 22, 157, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  input: {
    maxWidth: width * 0.4,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderColor: 'rgba(121, 22, 157, 0.2)',
  },
});

export default DetailCard;
