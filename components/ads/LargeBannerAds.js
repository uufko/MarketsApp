import { View} from 'react-native'
import React from 'react'
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9042490279958793/3673351850';

const LargeBannerAds = () => {
  return (
    <View style={{alignSelf:"center"}}>
      <BannerAd
        size={BannerAdSize.LARGE_BANNER}
        unitId={adUnitId}
      />
    </View>
  )
}

export default LargeBannerAds