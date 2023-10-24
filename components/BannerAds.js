import { View, Text, Button} from 'react-native'
import React from 'react'
import {BannerAd, BannerAdSize, TestIds,InterstitialAd,AdEventType} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9042490279958793/3673351850';

const BannerAds = () => {
  return (
    <View style={{alignItems:"center"}}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={adUnitId}
      />
    </View>
  )
}

export default BannerAds