import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 1,
        backgroundColor: 'white'
    }
})