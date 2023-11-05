import { View, Text, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;

const dataDegeri = true

const Header = () => {

    return (
        <SafeAreaView>
            <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#ed1c24" }}>
                <Image source={require("../assets/images/bimlogo.png")} style={{ marginTop: 5, resizeMode: "contain", height: deviceHeight / 18, width: deviceHeight / 8 }} />
                <Text style={{ fontSize: 12, opacity: .5, color: "white" }}>Bu Hafta</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "#ed1c24" }}>
                <TouchableOpacity onPress={() => {
                    
                    console.log(dataDegeri)
                }}>
                    <Text style={{ color: "white" }}>Market Ürünleri</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    
                    console.log(dataDegeri)
                }}>
                    <Text style={{ color: "white" }}>Aktüel Ürünler</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Header