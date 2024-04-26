import { StyleSheet } from "react-native";
import { UColors } from "../../../assets/uColors/uColors";
import { UDevice } from "../../../assets/uDevice/uDevice";

export const Style = StyleSheet.create({
    view:{
        height:UDevice.height,
        width:UDevice.width,
        backgroundColor:UColors.bimRed,
        justifyContent:"space-around",
        alignItems:"center",flexDirection:"row",flex:1
    },
    text:{
        alignSelf:"center",
        fontFamily:"Montserrat-Medium",
        color:"white",
        fontSize:UDevice.size*.5
    }
})