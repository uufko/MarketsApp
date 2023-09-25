import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import A101Page1 from './A101Pages/A101Page1';
import A101Page2 from './A101Pages/A101Page2';
import A101Page3 from './A101Pages/A101Page3';
import A101Page4 from './A101Pages/A101Page4';

let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;
const dataPipeLine = doc(db, "data", "a101pages")

const A101 = ({ navigation }) => {
    const [inCome, setInCome] = useState("")
    useEffect(() => {
        onSnapshot(dataPipeLine, (doc) => {
            setInCome(doc.data());
        })
    }, []);
    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={styles.viewStyle} >
            <Image source={require("../../assets/images/a101logo.png")} style={{flex:2,resizeMode:"contain", height:deviceHeight/10,width:deviceHeight/10}}></Image>
        <Text style={{flex:1, fontSize: 12, opacity: .5, color: "white"}}>28 Eylül Perşembe</Text>
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(A101Page1)}>
                <Image source={{ uri: (inCome["page1"]) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(A101Page2)}>
                <Image source={{ uri: (inCome["page2"]) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(A101Page3)}>
                <Image source={{ uri: (inCome["page3"]) }} style={styles.ImageStyle} /></TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.touchOpStyle} onPress={() => navigation.navigate(A101Page4)}>
                <Image source={{ uri: (inCome["page4"]) }} style={styles.ImageStyle} /></TouchableOpacity>
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
        height:deviceWidht*1.5,
        width: deviceWidht,
        backgroundColor: "bisque",
        resizeMode: "contain",
    },
    viewStyle: {
        marginBottom: 0,
        rowGap: -5,
        backgroundColor: "#00abc7",
        justifyContent: "center",
        alignItems: "center",
        height: deviceHeight/12,
    }
})

export default A101