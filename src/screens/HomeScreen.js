import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import Bim from './Bim';
import A101 from './A101';
import Sok from './Sok';
import FullBannerAds from '../../components/ads/FullBannerAds';


const HomeScreen = ({ navigation }) => {
    const bimRed = "#ed1c24"
    const a101Blue = "#00abc7"
    const sokYellow = "#ffe001"
    const bimLogo = require("../../assets/images/bimlogo.png")
    const a101Logo = require("../../assets/images/a101logo.png")
    const sokLogo = require("../../assets/images/soklogo.png")

    const bannerRef = useRef("ca-app-pub-9042490279958793/2956390345");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/images/backpng.png")} resizeMode='stretch' style={{ flex: 1, gap: 30 }}>
                <View style={{ flex: 2, justifyContent: "top", alignItems: "center", padding: 20 }}>
                    <Text style={{ fontSize: 30, fontFamily: "Koblenz-Serial-Heavy", color: "#feede6" }}>AKTÜEL ÜRÜNLER</Text></View>

                <TouchableOpacity style={[styles.touchableOpacityStyle, { backgroundColor: "#ed1c24" }]}
                    onPress={() => navigation.navigate(Bim)}>
                    <Image style={styles.imageStyle} source={bimLogo}></Image>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.touchableOpacityStyle, { backgroundColor: "#00abc7" }]}
                    onPress={() => navigation.navigate(A101)}>
                    <Image style={styles.imageStyle} source={a101Logo}></Image>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.touchableOpacityStyle, { backgroundColor: "#ffe001" }]}
                    onPress={() => navigation.navigate(Sok)}>
                    <Image style={styles.imageStyle} source={sokLogo}></Image>
                </TouchableOpacity><View style={{ flex: 0.2 }}></View>
            </ImageBackground>
            <View style={{ position: "absolute" ,bottom:0, alignSelf:"center"}}>
                <FullBannerAds/>
            </View>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: "#feede6",
        padding: 0,
    },
    imageStyle: {
        flex: 1,
        resizeMode: "contain",
        height: 100,
        width: 100,
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 10,
        shadowOffset: { height: 7, width: 3 },
    },
    touchableOpacityStyle: {
        flex: 2,
        borderRadius: 120,
        backgroundColor: "#00abc7",
        marginLeft: 80,
        marginRight: 80,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: .5,
        elevation: 10,
        shadowOffset: { height: 7, width: 3 }
    },
})

export default HomeScreen;