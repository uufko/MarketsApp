import { Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import FullBannerAds from '../../../components/ads/FullBannerAds'
import { Metarial, Color } from '../../material/Material'
import { Style } from './Style'

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={Style.container}>
            <ImageBackground source={Metarial.background} resizeMode='stretch' style={{ flex: 1, gap: 30 }}>
                <View style={{ flex: 2, justifyContent: "top", alignItems: "center", padding: 20 }}>
                    <Text style={Style.textStyle}>AKTÜEL ÜRÜNLER</Text></View>

                <TouchableOpacity style={[Style.touchableOpacityStyle, { backgroundColor: Color.bimRed }]}
                    onPress={() => navigation.navigate("Bim")}>
                    <Image style={Style.imageStyle} source={Metarial.bimLogo}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={[Style.touchableOpacityStyle, { backgroundColor: Color.a101Blue }]}
                    onPress={() => navigation.navigate("A101")}>
                    <Image style={Style.imageStyle} source={Metarial.a101Logo}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={[Style.touchableOpacityStyle, { backgroundColor: Color.sokYellow }]}
                    onPress={() => navigation.navigate("Sok")}>
                    <Image style={Style.imageStyle} source={Metarial.sokLogo}></Image>
                </TouchableOpacity><View style={{ flex: 0.2 }}></View>
            </ImageBackground>
            <View style={Style.adStyle}>
                <FullBannerAds />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;