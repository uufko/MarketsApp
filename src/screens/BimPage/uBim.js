import {View, Text, UIManager, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import UHeader from '../../components/atoms/uHeader/uHeader';
import UProducts from '../../components/molecules/uProducts/uProducts';
import {onSnapshot, doc} from 'firebase/firestore';
import {db} from '../../../firebase/config';
import UBottomBar from '../../components/molecules/uBottomBar/uBottomBar';
import {UImages} from '../../assets/uImages/uImages';
import {UColors} from '../../assets/uColors/uColors';
import {UDevice} from '../../assets/uDevice/uDevice';
import {useDispatch, useSelector} from 'react-redux';
import {setBim, setBimAktuel, setCurrentData, setCurrentNextData, setHeaderText} from '../../redux/slice';
const dataPipeLine = doc(db, 'data', 'bim');

const UBim = () => {
  const {currentData} = useSelector(state => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(dataPipeLine, doc => {
      dispatch(setBim(doc.data()));
      dispatch(setCurrentData("aktuel"))
      dispatch(setCurrentNextData("this"))
      dispatch(setHeaderText("Aktüel Ürünler"))
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={UColors.bimRed}/>
      <UHeader
        onPressBuHafta={() => {dispatch(setCurrentNextData("this"))}}
        onPressGelecekHafta={() => {dispatch(setCurrentNextData("next"))}}
        source={UImages.bim}
        height={UDevice.height * 0.06}
        backgroundColor={UColors.bimRed}
      />
      <UProducts data={currentData} />
      <UBottomBar
        onPressLeft={() => {dispatch(setCurrentData("aktuel")),dispatch(setHeaderText("Aktüel Ürünler"))}}
        onPressRight={() => {dispatch(setCurrentData("market")),dispatch(setHeaderText("Market Ürünleri"))}}
        backgroundColor={UColors.bimRed}
        text1={'Aktüel Ürünler'}
        text2={'Market Ürünleri'}
        color="white"
      />
    </View>
  );
};

export default UBim;
