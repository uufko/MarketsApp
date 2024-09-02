import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Style } from './style'

const UText = ({text}) => {
  return (
    <TouchableOpacity style={Style.view}>
      <Text style={Style.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default UText