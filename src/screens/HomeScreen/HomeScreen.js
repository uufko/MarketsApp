import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import FullBannerAds from '../../../components/ads/FullBannerAds';
import {Style} from './Style';
import USok from '../SokPage/uSok';
import UBim from '../BimPage/uBim';
import UA101 from '../A101Page/uA101';
import UMarketView from '../../components/atoms/uMarketView/uMarketView';
import {UImages} from '../../assets/uImages/uImages';
import {UColors} from '../../assets/uColors/uColors';
import {UDevice} from '../../assets/uDevice/uDevice';
import UFirebase from '../../firebase/uFirebase';
import {useDispatch, useSelector} from 'react-redux';
import {
  refresh,
  setA101AktuelNextWeek,
  setA101AktuelThisWeek,
  setA101NextWeek,
  setA101ThisWeek,
} from '../../redux/slice';
import {doc, onSnapshot} from 'firebase/firestore';
const a101Data = doc(db, 'data', 'a101');
const bimData = doc(db, 'data', 'bim');
const sokData = doc(db, 'data', 'sok');
import {db} from '../../../firebase/config';
import {uFunctions} from '../../functions/uFunctions';

const HomeScreen = ({navigation}) => {
  const {a101ThisWeek, a101NextWeek, a101AktuelThisWeek, a101AktuelNextWeek} =
    useSelector(state => state.market);
  const dispatch = useDispatch();
  const {pageCountF} = uFunctions();
  //onSnapshot(a101Data,doc =>{dispatch(setA101ThisWeek(doc.data().thisWeek))})
  //onSnapshot(a101Data,doc =>{dispatch(setA101NextWeek(doc.data().nextWeek))})
  //onSnapshot(a101Data,doc =>{dispatch(setA101AktuelThisWeek(doc.data().aktuelThisWeek))})
  //onSnapshot(a101Data,doc =>{dispatch(setA101AktuelNextWeek(doc.data().aktuelNextWeek))})

  useEffect(() => {
    pageCountF({
      url: 'https://aktuel-urunler.com/wp-diger/uploads/2024/08/A101-5-Eylul-2024-number-1.webp',
    });
    //pageCount({ url: a101NextWeek });
    //pageCount({ url: a101AktuelThisWeek });
    //pageCount({ url: a101AktuelNextWeek });
  }, [a101ThisWeek]);
  return (
    <SafeAreaView style={Style.container}>
      <StatusBar backgroundColor={'#43c354'} />
      <ImageBackground
        source={UImages.back}
        resizeMode="stretch"
        style={{flex: 1, gap: 30}}>
        <Text style={Style.textStyle}>AKTÜEL ÜRÜNLER</Text>

        <UMarketView
          source={UImages.bim}
          backgroundColor={UColors.bimRed}
          onPress={() => navigation.navigate(UBim)}
          height={UDevice.height * 0.065}
          firstText={'Aktüel Ürünler'}
          secondText={'Market Ürünleri'}
        />
        <UMarketView
          source={UImages.a101}
          backgroundColor={UColors.a101Blue}
          onPress={() => navigation.navigate(UA101)}
          height={UDevice.height * 0.04}
          firstText={'Aldın Aldın!'}
          secondText={'Haftanın Yıldızları'}
        />
        <UMarketView
          source={UImages.sok}
          backgroundColor={UColors.sokYellow}
          onPress={() => navigation.navigate(USok)}
          height={UDevice.height * 0.08}
          firstText={'Cumartesi Fırsatları'}
          secondText={'Çarşamba Fırsatları'}
        />
      </ImageBackground>
      <FullBannerAds />
    </SafeAreaView>
  );
};

export default HomeScreen;
