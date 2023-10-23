import { View, Text, Button} from 'react-native'
import React from 'react'
import {BannerAd, BannerAdSize, TestIds,InterstitialAd,AdEventType} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-9042490279958793/3673351850';

const BannerAds = () => {
  return (
    <View style={{alignItems:"center"}}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={TestIds.BANNER}
      />
    </View>
  )
}

export default BannerAds