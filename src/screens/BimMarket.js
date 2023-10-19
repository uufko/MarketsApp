import React, { useEffect, useState,useRef } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { BannerAd, TestIds, BannerAdSize } from '@react-native-admob/admob';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BannerAds from '../../components/BannerAds';


let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;
const dataPipeLine = doc(db, "data", "bimmarketpages")
const Tab = createBottomTabNavigator();



const BimMarket = ({ navigation }) => {
    
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
    const page6 = inCome["page6"]
    const page7 = inCome["page7"]
    const page8 = inCome["page8"]
    const page9 = inCome["page9"]
    const nextPage1 = inCome["nextPage1"]
    const nextPage2 = inCome["nextPage2"]
    const nextPage3 = inCome["nextPage3"]
    const nextPage4 = inCome["nextPage4"]
    const nextPage5 = inCome["nextPage5"]
    const nextPage6 = inCome["nextPage6"]
    const nextPage7 = inCome["nextPage7"]
    const nextPage8 = inCome["nextPage8"]
    const nextPage9 = inCome["nextPage9"]
    const [showPage1, setShowPage1] = useState(page1)
    const [showPage2, setShowPage2] = useState(page2)
    const [showPage3, setShowPage3] = useState(page3)
    const [showPage4, setShowPage4] = useState(page4)
    const [showPage5, setShowPage5] = useState(page5)
    const [showPage6, setShowPage6] = useState(page6)
    const [showPage7, setShowPage7] = useState(page7)
    const [showPage8, setShowPage8] = useState(page8)
    const [showPage9, setShowPage9] = useState(page9)
    const [text, setText] = useState("BİM'de bu hafta")
    useEffect(() => {
        setShowPage1(page1)
        setShowPage2(page2)
        setShowPage3(page3)
        setShowPage4(page4)
        setShowPage5(page5)
        setShowPage6(page6)
        setShowPage7(page7)
        setShowPage8(page8)
        setShowPage9(page9)
    }, [page1]);

    const bannerRef = useRef("ca-app-pub-9042490279958793/2956390345");
    
    return (
        <SafeAreaView>

            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={[styles.viewStyle, { flexDirection: "row" }]}>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
                        onPress={() => {
                            setShowPage1(page1)
                            setShowPage2(page2)
                            setShowPage3(page3)
                            setShowPage4(page4)
                            setShowPage5(page5)
                            setShowPage6(page6)
                            setShowPage7(page7)
                            setShowPage8(page8)
                            setShowPage9(page9)
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
                            setShowPage6(nextPage6)
                            setShowPage7(nextPage7)
                            setShowPage8(nextPage8)
                            setShowPage9(nextPage9)
                            setText("BİM'de gelecek hafta")
                        }} >
                        <Text style={{ color: "white", fontSize: 13, opacity: .8 }}>Gelecek Hafta</Text>
                    </TouchableOpacity>

                </View>
                {showPage1 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage1", showPage1)}>
                    <ImageBackground source={{ uri: (showPage1) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage2 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage2", showPage2)}>
                    <ImageBackground source={{ uri: (showPage2) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage3 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage3", showPage3)}>
                    <ImageBackground source={{ uri: (showPage3) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage4 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage4", showPage4)}>
                    <ImageBackground source={{ uri: (showPage4) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage5 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage5", showPage5)}>
                    <ImageBackground source={{ uri: (showPage5) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage6 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage6", showPage6)}>
                    <ImageBackground source={{ uri: (showPage6) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage7 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage7", showPage7)}>
                    <ImageBackground source={{ uri: (showPage7) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage8 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage8", showPage8)}>
                    <ImageBackground source={{ uri: (showPage8) }} style={styles.ImageStyle} /></TouchableOpacity>}
                {showPage9 == "0" ? <></> : <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate("BimPage9", showPage9)}>
                    <ImageBackground source={{ uri: (showPage9) }} style={styles.ImageStyle} /></TouchableOpacity>}
                    
            <BannerAds/>
            </ScrollView >
            
            
        
        
        </SafeAreaView>
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
export default BimMarket