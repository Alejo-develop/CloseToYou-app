import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { ButtonGenericProps } from "../../interface/buttonGeneric.interface"

const ButtonGenericComponent = ({ text, onPress }: ButtonGenericProps) =>{
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Text style={styles.buttonContent}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonGenericComponent