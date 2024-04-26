import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const UBottomBar = ({backgroundColor,text1,text2,color="white",onPressLeft,onPressRight}) => {
  return (
    <View style={[Style.view,{backgroundColor:backgroundColor}]}>
      <TouchableOpacity onPress={onPressLeft}>
        <Text style={[Style.text,{color:color}]}>{text1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRight}>
        <Text style={[Style.text,{color:color}]}>{text2}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UBottomBar