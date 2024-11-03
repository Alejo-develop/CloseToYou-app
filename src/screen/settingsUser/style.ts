import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
        backgroundColor: '#79169D'
    },
    header: {
        backgroundColor: '#79169D',
        height: height * 0.3,
    },
    containerInfo: {
        backgroundColor: 'white',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        height: height * 0.7,
        elevation: 12,
        zIndex: 2
    }
})