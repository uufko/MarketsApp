import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {UImages} from '../../../../assets/images/uImage';
import {Style} from './style';
import { UDevice } from '../../../assets/uDevice/uDevice';
import { useSelector } from 'react-redux';

const UHeader = ({
  source,
  backgroundColor,
  onPressBuHafta,
  onPressGelecekHafta,
  color = 'white',
  height, color2= "white"
}) => {
  const {headerText} = useSelector((state)=>state.market)
  return (
    <View style={[Style.view, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity onPress={onPressBuHafta} style={{flex: 1}}>
        <Text style={[Style.text, {color: color2}]}>Bu Hafta</Text>
      </TouchableOpacity>
      <View style={{flex: 2}}>
        <Image source={source} style={[Style.image,{height:height}]} resizeMode="contain" />
        <Text style={[Style.headerText,{color:color2}]}>{headerText}</Text>
      </View>
      <TouchableOpacity onPress={onPressGelecekHafta} style={{flex: 1}}>
        <Text style={[Style.text, {color:color2}]}>Gelecek Hafta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UHeader;
