import { View, Text, FlatList } from 'react-native'
import React from 'react'
import UProductImage from '../../atoms/uImage/uProductImage'
import { UImages } from '../../../../assets/images/uImage'
import FullBannerAds from '../../../../components/ads/FullBannerAds'
import { useNavigation } from '@react-navigation/native'
import FullScreen from '../../../../components/FullScreen'

const UProducts = ({data}) => {
  const navigation = useNavigation()
  return (
    <View style={{flex:13}}>
      <FlatList
      data={data}
      renderItem={({item})=>{
        return(
          <View>
          <UProductImage source={item} onPress={()=>navigation.navigate("FullScreen", item)}/>
          <FullBannerAds/></View>
        )
      }}/>
    </View>
  )
}

export default UProducts