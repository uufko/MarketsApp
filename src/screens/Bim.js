import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
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


    const [showPage1, setShowPage1] = useState(page1)
    const [showPage2, setShowPage2] = useState(page2)
    const [showPage3, setShowPage3] = useState(page3)
    const [showPage4, setShowPage4] = useState(page4)
    const [showPage5, setShowPage5] = useState(page5)
    const [text, setText] = useState("BİM'de bu hafta")

    useEffect(() => {
        setShowPage1(page1)
        setShowPage2(page2)
        setShowPage3(page3)
        setShowPage4(page4)
        setShowPage5(page5)
    }, [page1]);

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={[styles.viewStyle, { flexDirection: "row" }]}>


                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
                    onPress={() => {
                        setShowPage1(page1)
                        setShowPage2(page2)
                        setShowPage3(page3)
                        setShowPage4(page4)
                        setShowPage5(page5)
                        setText("BİM'de bu hafta")
                    }} >
                    <Text style={{ color: "white", fontSize: 13, opacity: .8 }}>Bu Hafta</Text></TouchableOpacity>

                <View style={{ justifyContent: "center", alignItems: "center", flex: 2 }}>
                    <Image source={require("../../assets/images/bimlogo.png")} style={{ flex: 2, resizeMode: "contain", height: deviceHeight / 10, width: deviceHeight / 10 }}></Image>
                    <Text style={{ flex: 1, fontSize: 12, opacity: .5, color: "white" }}>{text}</Text>
                </View>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
                    onPress={() => {
                        setShowPage1(nextPage1)
                        setShowPage2(nextPage2)
                        setShowPage3(nextPage3)
                        setShowPage4(nextPage4)
                        setShowPage5(nextPage5)
                        setText("BİM'de gelecek hafta")
                    }} >
                    <Text style={{ color: "white", fontSize: 13, opacity: .8 }}>Gelecek Hafta</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage1",showPage1)}>
                <ImageBackground source={{ uri: (showPage1) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage2",showPage2)}>
                <ImageBackground source={{ uri: (showPage2) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage3",showPage3)}>
                <ImageBackground source={{ uri: (showPage3) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage4",showPage4)}>
                <ImageBackground source={{ uri: (showPage4) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage5",showPage5)}>
                <ImageBackground source={{ uri: (showPage5) }} style={styles.ImageStyle} /></TouchableOpacity>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    touchOpStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8FF",
        paddingBottom: 2
    },
    ImageStyle: {
        flex: 1,
        height: deviceWidht * 1.5,
        width: deviceWidht,
        backgroundColor: "bisque",
        resizeMode: "contain"
    },
    viewStyle: {
        rowGap: -5,
        backgroundColor: "#ed1c24",
        justifyContent: "center",
        alignItems: "center",
        height: deviceHeight / 12
    }
})
export default Bim