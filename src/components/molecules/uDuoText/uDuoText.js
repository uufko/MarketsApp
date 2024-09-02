import { View, Text } from 'react-native'
import React from 'react'
import UText from '../../atoms/uText/uText'

const UDuoText = ({firstText,secondText}) => {
  return (
    <View>
      <UText text={firstText}/>
      <UText text={secondText}/>
    </View>
  )
}

export default UDuoText