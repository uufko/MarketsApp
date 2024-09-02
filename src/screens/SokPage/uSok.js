import {View, Text, UIManager, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import UHeader from '../../components/atoms/uHeader/uHeader';
import UProducts from '../../components/molecules/uProducts/uProducts';
import {onSnapshot, doc} from 'firebase/firestore';
import {db} from '../../../firebase/config';
import UBottomBar from '../../components/molecules/uBottomBar/uBottomBar';
import { UImages } from '../../assets/uImages/uImages';
import { UColors } from '../../assets/uColors/uColors';
import { UDevice } from '../../assets/uDevice/uDevice';
import { refresh, setBim, setCurrentData, setCurrentNextData, setHeaderText } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux';
const dataPipeLine = doc(db, 'data', 'sok');

const USok = () => {
  const {currentData} = useSelector(state => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(dataPipeLine, doc => {
      dispatch(setBim(doc.data()));
      dispatch(setCurrentData("aktuel"))
      dispatch(setCurrentNextData("this"))
      dispatch(setHeaderText("Cumartesi Fırsatları"))
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={UColors.sokYellow} barStyle={"dark-content"}/>
      <UHeader
        onPressBuHafta={() => {dispatch(setCurrentNextData("this"))}}
        onPressGelecekHafta={() => {dispatch(setCurrentNextData("next"))}}
        source={UImages.sok} color2='black'
        height={UDevice.height * 0.06}
        backgroundColor={UColors.sokYellow}
      />
      <UProducts data={currentData} />
      <UBottomBar
        onPressLeft={() => {dispatch(setCurrentData("aktuel")),dispatch(setHeaderText("Cumartesi Fırsatları"))}}
        onPressRight={() => {dispatch(setCurrentData("market")),dispatch(setHeaderText("Çarşamba Fırsatları"))}}
        backgroundColor={UColors.sokYellow}
        text1={'Cumartesi Fırsatları'}
        text2={'Çarşamba Fırsatları'}
        color="black"
      />
    </View>
  );
};

export default USok;
