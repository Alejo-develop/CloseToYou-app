import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.85,
        height: height * 0.06,
        borderWidth: 3,
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerImg: {
        width: width * 0.1,
        height: height * 0.045,
        borderRadius: 25,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgContact:{
        width: width * 0.11,
        height: height * 0.048,
        borderRadius: 25,
    },
    nameContact: {
        color: 'black'
    },
    roleContact: {
        color: '#79169D',
        fontSize: 12
    },
    containerIcons: {
        flexDirection: 'row',
        marginRight: width * 0.07,
        gap: 18
    },
    icons:{
        fontSize: 23,
        color: '#79169D'
    },
    containerInfocontact: {
        flexDirection: 'row',
        gap: width * 0.04
    }
})

export default styles