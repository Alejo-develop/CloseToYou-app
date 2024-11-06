import { TextInput, View } from "react-native"
import { styles } from "./style"
import { InputProps } from "../../interface/input.interface"

const InputComponent = ({ placeholder, value, onChangeText, entry}: InputProps) =>{
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                editable={true}
                value={value}
                secureTextEntry={entry}
                onChangeText={onChangeText}
                placeholderTextColor={'gray'}
            />
        </View>
    )
}

export default InputComponent