import { Dimensions, StyleSheet } from "react-native";

const { width, height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1
    }
})