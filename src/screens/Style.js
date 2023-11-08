import { StyleSheet, Dimensions } from "react-native"

let deviceWidht = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const bimRed = "#ed1c24"
const a101Blue = "#00abc7"
const sokYellow = "#ffe001"
const bimLogo = require("../../assets/images/bimlogo.png")
const a101Logo = require("../../assets/images/a101logo.png")
const sokLogo = require("../../assets/images/soklogo.png")

export const Style = StyleSheet.create({
    imageStyle: {
        height: deviceWidht * 1.5,
        width: deviceWidht,
        flex: 1,
        resizeMode: 'contain'
    },
    touchableStyle: {
        flex: 1,
        alignItems: "center",
        borderBottomColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: "center"
    },
    container: {
        backgroundColor: "white",
        flex: 1
    },
    toolBarViewStyle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bimRed
    },
    toolBarImageStyle: {
        marginTop: 5,
        resizeMode: "contain",
        height: deviceHeight / 18,
        width: deviceHeight / 8
    },
    toolBarTextStyle: {
        fontSize: 12,
        opacity: .5,
        color: "white"
    },
    navBarViewStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: bimRed,
        height: deviceHeight / 20
    },
    bottomBarStyle:{
        backgroundColor: bimRed,
        position: "absolute",
        flex: 1,
        bottom: 0,
        flexDirection: "row",
        width: deviceWidht,
        height: deviceWidht / 10,
    }

})