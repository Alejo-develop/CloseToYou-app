import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';

interface HeaderProps {
  styleHeader: StyleProp<ViewStyle>;
  styleTitle: StyleProp<TextStyle>;
  styleTitleSpan: StyleProp<TextStyle>;
  styleSubtitle: StyleProp<TextStyle>;
  styleSubtitleSpan: StyleProp<TextStyle>;
}

const HeaderComponent = ({
  styleHeader,
  styleTitle,
  styleTitleSpan,
  styleSubtitle,
  styleSubtitleSpan,
}: HeaderProps) => {
  return (
    <View style={styleHeader}>
      <Text style={styleTitle}>
        CloseTo<Text style={styleTitleSpan}>You</Text>
      </Text>
      <Text style={styleSubtitle}>
        Log<Text style={styleSubtitleSpan}>in</Text>
      </Text>
    </View>
  );
};

export default HeaderComponent;
