import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('screen')
const {height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.85,
        height: height * 0.1,  
        backgroundColor: '#ffffff',  
        borderRadius: 12,  
        paddingVertical: height * 0.015,  
        paddingHorizontal: width * 0.04,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        elevation: 6,
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
        marginRight: width * 0.04,
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