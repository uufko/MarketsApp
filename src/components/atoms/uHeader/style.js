import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uDevice/uDevice";
import { UColors } from "../../../assets/uColors/uColors";

export const Style = StyleSheet.create({
    view:{
        height:UDevice.height*.1,
        width:UDevice.width,
        backgroundColor:UColors.bimRed,
        justifyContent:"space-around",
        alignItems:"center",flexDirection:"row",flex:1.5
    },
    image:{
        height:UDevice.height*.05,
        width:UDevice.width*.3,
        alignSelf:"center"
    },
    text:{
        alignSelf:"center",
        fontFamily:"Montserrat-Medium",
        color:"white",
        fontSize:UDevice.size*.5
    },
    headerText:{
        alignSelf:"center",
        fontSize:UDevice.size*.5,
        color:"white",
        opacity:.6
    }
})