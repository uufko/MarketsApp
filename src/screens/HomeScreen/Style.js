import { StyleSheet } from "react-native"

export const Style = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: "#feede6",
        padding: 0,
    },
    imageStyle: {
        flex: 1,
        resizeMode: "contain",
        height: 100,
        width: 100,
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 10,
        shadowOffset: { height: 7, width: 3 },
    },
    touchableOpacityStyle: {
        flex: 2,
        borderRadius: 120,
        backgroundColor: "#00abc7",
        marginLeft: 80,
        marginRight: 80,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 10,
        shadowOffset: { height: 7, width: 3 }
    },
    adStyle: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center"
    },
    textStyle:{ 
        fontSize: 30, 
        fontFamily: "Koblenz-Serial-Heavy", 
        color: "#feede6" }
})