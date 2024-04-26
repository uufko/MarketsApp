import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {onSnapshot, doc} from 'firebase/firestore';
import {db} from '../../firebase/config';
import {useDispatch, useSelector} from 'react-redux';

const UFirebase = () => {
  const {
    bimMarket,
    bimAktuel,
    bimNextMarket,
    bimNextAktuel,
    bimAktuelCount,
    bimNextAktuelCount,
    bimMarketCount,
    bimNextMarketCount,
  } = useSelector(state => state.market);
  const dispatch = useDispatch();

  const dataPipeLine = doc(db, 'data', 'bim');
  useEffect(() => {
    onSnapshot(dataPipeLine, doc => {
      let thisWeek = doc.data()['thisWeek'];
      let nextWeek = doc.data()['nextWeek'];
      let aktuelThisWeek = doc.data()['aktuelThisWeek'];
      let aktuelNextWeek = doc.data()['aktuelNextWeek'];

      bimNextMarketCount = doc.data()['nextWeekCount'];
      bimMarketCount = doc.data()['thisWeekCount'];
      bimAktuelCount = doc.data()['aktuelThisWeekCount'];
      bimNextAktuelCount = doc.data()['aktuelNextWeekCount'];
      for (i = 1; i <= bimMarketCount; i++) {
        bimMarket.push(thisWeek.replace('number', i));
      }
      for (i = 1; i <= bimNextMarketCount; i++) {
        bimNextMarket.push(nextWeek.replace('number', i));
      }
      for (i = 1; i <= bimAktuelCount; i++) {
        bimAktuel.push(aktuelThisWeek.replace('number', i));
      }
      for (i = 1; i <= bimNextAktuelCount; i++) {
        bimNextAktuel.push(aktuelNextWeek.replace('number', i));
      }
    });
  });

  return (
    <View>
      <Text>uFirebaUe</Text>
    </View>
  );
};

export default UFirebase;
