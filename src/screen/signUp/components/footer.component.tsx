import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import ButtonGenericComponent from "../../../components/buttonGeneric/button.component"
import { LoginInterface, SignUpInterface } from "../../../interface/user.interface";

interface FooterProps{
    styleContainerFooter: StyleProp<ViewStyle>; 
    styletext: StyleProp<TextStyle>;
    styleSpan: StyleProp<TextStyle>;
    register: (form:SignUpInterface) => void;
    goToLogin: () => void;
    form: SignUpInterface
}

const FooterComponent = ({styleContainerFooter, goToLogin, styletext, styleSpan, register, form}: FooterProps) => {
    return(
        <View style={styleContainerFooter}>
          <ButtonGenericComponent text="Sign Up" onPress={() => register(form)}/>
          <View>
            <Text style={styletext}>Already have account?</Text>

            <TouchableOpacity onPress={goToLogin}>
              <Text style={styleSpan}>Sign in!</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default FooterComponent