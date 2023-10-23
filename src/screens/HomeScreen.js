import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import A101BottomTabs from '../../navigation/A101BottomTabs';
import SokButtomTabs from '../../navigation/SokButtomTabs';
import BimBottomTabs from '../../navigation/BimBottomTabs';
import BannerAds from '../../components/BannerAds';


const HomeScreen = ({ navigation }) => {
    const bimRed = "#ed1c24"
    const a101Blue = "#00abc7"
    const sokYellow = "#ffe001"

    const bannerRef = useRef("ca-app-pub-9042490279958793/2956390345");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/images/backpng.png")} resizeMode='stretch' style={{ flex: 1, gap: 30 }}>
                <View style={{ flex: 2, justifyContent: "top", alignItems: "center", padding: 20 }}><Text style={{ fontSize: 30, fontFamily: "Koblenz-Serial-Heavy", color: "#333e54" }}>AKTÜEL ÜRÜNLER</Text></View>

                <TouchableOpacity style={[styles.touchableOpacityStyle, { backgroundColor: "#ed1c24" }]}
                    onPress={() => navigation.navigate(BimBottomTabs)}>
                    <Image style={styles.imageStyle} source={require("../../assets/images/bimlogo.png")}></Image>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.touchableOpacityStyle, { backgroundColor: "#00abc7" }]}
                    onPress={() => navigation.navigate(A101BottomTabs)}>
                    <Image style={styles.imageStyle} source={require("../../assets/images/a101logo.png")}></Image>
                </TouchableOpacity>


                <TouchableOpacity style={[styles.touchableOpacityStyle, { backgroundColor: "#ffe001" }]}
                    onPress={() => navigation.navigate(SokButtomTabs)}>
                    <Image style={styles.imageStyle} source={require("../../assets/images/soklogo.png")}></Image>
                </TouchableOpacity><View style={{ flex: 0.2 }}></View>
            </ImageBackground>
            <BannerAds />
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