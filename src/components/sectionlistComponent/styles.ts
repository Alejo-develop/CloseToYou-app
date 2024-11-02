import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    containerList: {
        width: width * 1,
        marginTop: height * 0.06,
        zIndex: -2,
        flex: 1
    },
    containertextSeparator: {
        padding: height * 0.01
    },
    textSeparator: {
        fontSize: height * 0.02,
        color: '#79169D',
        fontWeight: 'bold',
        marginLeft: width * 0.065
    }
})