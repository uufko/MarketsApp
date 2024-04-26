import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { UImages } from '../../../assets/uImages/uImages'
import { Style } from './style'

const UMarketView = ({onPress,source,backgroundColor,height}) => {
  return (
    <TouchableOpacity style={[Style.touchable,{backgroundColor:backgroundColor}]} onPress={onPress}>
      <Image resizeMode='contain' source={source} style={[Style.image,{height:height}]}/>
    </TouchableOpacity>
  )
}

export default UMarketView