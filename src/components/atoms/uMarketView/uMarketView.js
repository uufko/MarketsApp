import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { UImages } from '../../../assets/uImages/uImages'
import { Style } from './style'
import UText from '../uText/uText'
import UDuoText from '../../molecules/uDuoText/uDuoText'

const UMarketView = ({onPress,source,backgroundColor,height,firstText,secondText}) => {
  const [iconVisible, setIconVisible] = useState(false)
  return (
    <TouchableOpacity style={[Style.touchable,{backgroundColor:backgroundColor}]} onPress={onPress}>
      {iconVisible==false ? <Image resizeMode='contain' source={source} style={[Style.image,{height:height}]}/> :
      
      <UDuoText firstText={firstText} secondText={secondText}/> }
      
      
    </TouchableOpacity>
  )
}

export default UMarketView