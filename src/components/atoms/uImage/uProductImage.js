import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { UImages } from '../../../../assets/images/uImage'
import { Style } from './style'

const UProductImage = ({source,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Style.view}>
      <Image source={{uri:source}} style={Style.image} resizeMode="contain" />
    </TouchableOpacity>
  )
}

export default UProductImage