import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import ButtonGenericComponent from '../../../components/buttonGeneric/button.component';
import {LoginInterface} from '../../../interface/user.interface';

interface FooterProps {
  styleContainerFooter: StyleProp<ViewStyle>;
  styletext: StyleProp<TextStyle>;
  styleSpan: StyleProp<TextStyle>;
  login: (form: LoginInterface) => void;
  goToSignUp: () => void;
  form: LoginInterface;
}

const FooterComponent = ({
  styleContainerFooter,
  goToSignUp,
  styletext,
  styleSpan,
  login,
  form,
}: FooterProps) => {
  return (
    <View style={styleContainerFooter}>
      <ButtonGenericComponent text="Login" onPress={() => login(form)} />
      <View>
        <Text style={styletext}>Don't have any account?</Text>

        <TouchableOpacity onPress={goToSignUp}>
          <Text style={styleSpan}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterComponent;
