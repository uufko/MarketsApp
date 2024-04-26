import {View, Text, UIManager, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import UHeader from '../../components/atoms/uHeader/uHeader';
import UProducts from '../../components/molecules/uProducts/uProducts';
import {onSnapshot, doc} from 'firebase/firestore';
import {db} from '../../../firebase/config';
import UBottomBar from '../../components/molecules/uBottomBar/uBottomBar';
import { UImages } from '../../assets/uImages/uImages';
import { UColors } from '../../assets/uColors/uColors';
import { UDevice } from '../../assets/uDevice/uDevice';
import { useDispatch, useSelector } from 'react-redux';
import { setA101, setBim, setCurrentData, setCurrentNextData, setHeaderText } from '../../redux/slice';
const dataPipeLine = doc(db, 'data', 'a101');

const UA101 = () => {
  const {currentData} = useSelector(state => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(dataPipeLine, doc => {
      dispatch(setBim(doc.data()));
      dispatch(setCurrentData("aktuel"))
      dispatch(setCurrentNextData("this"))
      dispatch(setHeaderText("Aldın Aldın"))
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <UHeader
        onPressBuHafta={() => {dispatch(setCurrentNextData("this"))}}
        onPressGelecekHafta={() => {dispatch(setCurrentNextData("next"))}}
        source={UImages.a101}
        height={UDevice.height * 0.06}
        backgroundColor={UColors.a101Blue}
      />
      <UProducts data={currentData} />
      <UBottomBar
        onPressLeft={() => {dispatch(setCurrentData("aktuel")),dispatch(setHeaderText("Aldın Aldın"))}}
        onPressRight={() => {dispatch(setCurrentData("market")),dispatch(setHeaderText("Haftanın Yıldızları"))}}
        backgroundColor={UColors.a101Blue}
        text1={'Aldın Aldın'}
        text2={'Haftanın Yıldızları'}
        color="white"
      />
    </View>
  );
};

export default UA101;
