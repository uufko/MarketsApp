import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, { useEffect } from 'react';
import FullBannerAds from '../../../components/ads/FullBannerAds';
import {Style} from './Style';
import USok from '../SokPage/uSok';
import UBim from '../BimPage/uBim';
import UA101 from '../A101Page/uA101';
import UMarketView from '../../components/atoms/uMarketView/uMarketView';
import {UImages} from '../../assets/uImages/uImages';
import {UColors} from '../../assets/uColors/uColors';
import { UDevice } from '../../assets/uDevice/uDevice';
import UFirebase from '../../firebase/uFirebase';
import { useDispatch } from 'react-redux';
import { refresh } from '../../redux/slice';

const HomeScreen = ({navigation}) => {  
  return (
    <SafeAreaView style={Style.container}>
      <ImageBackground
        source={UImages.back}
        resizeMode="stretch"
        style={{flex: 1, gap: 30}}>
        
          <Text style={Style.textStyle}>AKTÜEL ÜRÜNLER</Text>
        
        <UMarketView
          source={UImages.bim}
          backgroundColor={UColors.bimRed}
          onPress={() => navigation.navigate(UBim)}
          height={UDevice.height*.065}
        />
        <UMarketView
          source={UImages.a101}
          backgroundColor={UColors.a101Blue}
          onPress={() => navigation.navigate(UA101)}
          height={UDevice.height*.04}
        />
        <UMarketView
          source={UImages.sok}
          backgroundColor={UColors.sokYellow}
          onPress={() => navigation.navigate(USok)}
          height={UDevice.height*.08}
        />

      </ImageBackground>
        <FullBannerAds />
    </SafeAreaView>
  );
};

export default HomeScreen;
