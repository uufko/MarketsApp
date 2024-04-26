import { Dimensions } from "react-native";

export const UDevice = {
    height : Dimensions.get("window").height,
    width : Dimensions.get("window").width,
    size:Dimensions.get("window").height*Dimensions.get("window").width/10000
}