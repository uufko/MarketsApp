import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SokPage1 from './SokPages/SokPage1';
import SokPage2 from './SokPages/SokPage2';

let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;
const dataPipeLine = doc(db, "data", "sokpages")

const Sok = ({navigation}) => {
  const [inCome, setInCome] = useState("")
  useEffect(() => {
    onSnapshot(dataPipeLine, (doc) => {
      setInCome(doc.data());
    })
  }, []);
  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={styles.viewStyle} >
        <Image source={require("../../assets/images/soklogo.png")} style={{flex:2,resizeMode:"contain", height:deviceHeight/10,width:deviceHeight/10}}></Image>
        <Text style={{flex:1, fontSize: 12, opacity: .5, color: "black"}}>23-26 Eylül Tarihleri Arasında Geçerlidir</Text>
      </View>
      <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(SokPage1)}>
        <Image source={{ uri: (inCome["page1"]) }} style={styles.ImageStyle} /></TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(SokPage2)}>
        <Image source={{ uri: (inCome["page2"]) }} style={styles.ImageStyle} /></TouchableOpacity>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  touchOpStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8FF",
    paddingBottom:2
  },
  ImageStyle: {
    flex: 1,
    height: deviceWidht*1.44,
    width: deviceWidht,
    backgroundColor: "#F8F8FF",
    resizeMode: "contain",
  },
  viewStyle:{
    rowGap: -2, 
    backgroundColor: "#ffe001", 
    justifyContent: "center", 
    alignItems: "center", 
    height: deviceHeight/12,
    flexDirection:"column"
  }
})

export default Sok