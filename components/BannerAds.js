import { View, Text ,useRef,bannerRef} from 'react-native'
import React from 'react'
import { BannerAd, TestIds, BannerAdSize } from '@react-native-admob/admob';

const BannerAds = () => {
  return (
    <View>
      <BannerAd style={{ position: "relative", bottom: 0,alignSelf:"center" }}
                size={BannerAdSize.BANNER}
                unitId={TestIds.BANNER}
                ref={bannerRef}
            />
    </View>
  )
}

export default BannerAds