import { View, Text, Image, Dimensions, TouchableOpacity, BackHandler } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
let deviceWidht = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const MarketHeader = ({ headerLogo, headerColor, headertText, textColor, navigation}) => {

  return (
    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: headerColor, flexDirection: "row", flex: 1 }}>
      <TouchableOpacity onPress={()=> {navigation.goBack()}} style={{ flex: 1 }}>
        <Image style={{ flex: 1, height: deviceHeight / 20, width: deviceHeight / 25, left: 20, resizeMode: "contain" }}
          source={require("../assets/images/backbuttonlight.png")} />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={headerLogo} style={{ marginTop: 5, resizeMode: "contain", height: deviceHeight / 18, width: deviceHeight / 8 }} />
        <Text style={{ fontSize: 12, opacity: .5, color: textColor , fontFamily:"Montserrat-Medium" }}>{headertText}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text></Text>
      </View>
    </View>
  )
}

export default MarketHeader