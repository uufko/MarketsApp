import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BimPage1 from './BimPages/BimPage1';
import BimPage2 from './BimPages/BimPage2';
import BimPage3 from './BimPages/BimPage3';
import BimPage4 from './BimPages/BimPage4';
import BimPage5 from './BimPages/BimPage5';
import ImageZoom from 'react-native-image-pan-zoom';

let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;
const dataPipeLine = doc(db, "data", "bimpages")

const Bim = ({ navigation }) => {
    const [inCome, setInCome] = useState("")
    useEffect(() => {
        onSnapshot(dataPipeLine, (doc) => {
            setInCome(doc.data());
        })
    }, []);
    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={styles.viewStyle} >
            <Image source={require("../../assets/images/bimlogo.png")} style={{flex:2,resizeMode:"contain", height:deviceHeight/10,width:deviceHeight/10}}></Image>
        <Text style={{flex:1, fontSize: 12, opacity: .5, color: "white"}}>29 Eylül'den itibaren</Text>
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(BimPage1)}>
                <Image source={{ uri: (inCome["page1"]) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(BimPage2)}>
                <Image source={{ uri: (inCome["page2"]) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(BimPage3)}>
                <Image source={{ uri: (inCome["page3"]) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(BimPage4)}>
                <Image source={{ uri: (inCome["page4"]) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(BimPage5)}>
                <Image source={{ uri: (inCome["page5"]) }} style={styles.ImageStyle} /></TouchableOpacity>
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
        height: deviceWidht*1.5,
        width: deviceWidht,
        backgroundColor: "bisque",
        resizeMode: "contain",
    },
    viewStyle: {
        rowGap: -5,
        backgroundColor: "#ed1c24",
        justifyContent: "center",
        alignItems: "center",
        height: deviceHeight/12
    }
})
export default Bim