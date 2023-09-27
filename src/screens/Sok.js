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
  const page1 = inCome["page1"]
  const page2 = inCome["page2"]
  const page3 = inCome["page3"]
  const page4 = inCome["page4"]
  const page5 = inCome["page5"]
  const nextPage1 = inCome["nextPage1"]
  const nextPage2 = inCome["nextPage2"]
  const nextPage3 = inCome["nextPage3"]
  const nextPage4 = inCome["nextPage4"]
  const nextPage5 = inCome["nextPage5"]
  const [showPage1, setShowPage1] = useState (page1)
  const [showPage2, setShowPage2] = useState (page2)
  const [showPage3, setShowPage3] = useState (page3)
  const [showPage4, setShowPage4] = useState (page4)
  const [showPage5, setShowPage5] = useState (page5)
  const [text, setText] = useState("A101'de bu hafta")

  useEffect(() => {
    setShowPage1(page1)
    setShowPage2(page2)
    setShowPage3(page3)
    setShowPage4(page4)
    setShowPage5(page5)
  }, [page1]);

  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={[styles.viewStyle,{flexDirection:"row"}]} >
      <TouchableOpacity style={{justifyContent:"center", alignItems:"center",flex:1}} 
                onPress={()=> {
                    setShowPage1(page1)
                    setShowPage2(page2)
                    setShowPage3(page3)
                    setShowPage4(page4)
                    setShowPage5(page5)
                    setText("Şok'ta Çarşamba Fırsatları")
                }} >
                <Text style={{color:"black", fontSize:13, opacity:.8}}>Çarşamba Fırsatları</Text></TouchableOpacity>

                <View style={{justifyContent:"center", alignItems:"center", flex:2}}>

        <Image source={require("../../assets/images/soklogo.png")} style={{flex:2,resizeMode:"contain", height:deviceHeight/10,width:deviceHeight/10}}></Image>
        <Text style={{flex:1, fontSize: 12, opacity: .5, color: "black"}}>{text}</Text></View>
        <TouchableOpacity style={{justifyContent:"center", alignItems:"center",flex:1}} 
                onPress={()=> {
                    setShowPage1(nextPage1)
                    setShowPage2(nextPage2)
                    setShowPage3(nextPage3)
                    setShowPage4(nextPage4)
                    setShowPage5(nextPage5)
                    setText("Şok'ta Cumartesi Fırsatları")
                }} >
                <Text style={{color:"black", fontSize:13, opacity:.8}}>Cumartesi Fırsatları</Text>
                </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("SokPage1",showPage1)}>
        <Image source={{ uri: (showPage1) }} style={styles.ImageStyle} /></TouchableOpacity>
      <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("SokPage2",showPage2)}>
        <Image source={{ uri: (showPage2) }} style={styles.ImageStyle} /></TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("SokPage3",showPage3)}>
        <Image source={{ uri: (showPage3) }} style={styles.ImageStyle} /></TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("SokPage4",showPage4)}>
        <Image source={{ uri: (showPage4) }} style={styles.ImageStyle} /></TouchableOpacity>
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