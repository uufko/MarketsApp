import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

let deviceWidht = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const MarketHeader = ({headerLogo, headerColor, headertText, textColor}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: headerColor }}>
                    <Image source={headerLogo} style={{ marginTop: 5, resizeMode: "contain", height: deviceHeight / 18, width: deviceHeight / 8 }} />
                    <Text style={{ fontSize: 12, opacity: .5, color: textColor }}>{headertText}</Text>
                </View>
  )
}

export default MarketHeader