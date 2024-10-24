import { TextInput, View } from "react-native"
import { styles } from "./style"
import { InputProps } from "../../interface/input.interface"

const InputComponent = ({ placeholder, value, onChangeText }: InputProps) =>{
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                editable={true}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default InputComponent