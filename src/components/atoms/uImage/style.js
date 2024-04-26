import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uDevice/uDevice";

export const Style = StyleSheet.create({
    view:{
        height:UDevice.width*1.5,
        width:UDevice.width,justifyContent:"center",alignItems:"center"
    },
    image:{
        height:UDevice.width*1.5,
        width:UDevice.width, 
    },
    
})