import { View, Text, SafeAreaView, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import FullBannerAds from '../../components/ads/FullBannerAds'
import MarketHeader from '../../components/MarketHeader'

const dataPipeLine = doc(db, "data", "a101")
let deviceWidht = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const a101Blue = "#00abc7"
const a101Logo = require("../../assets/images/a101logo.png")

const A101 = ({ navigation }) => {

    const styleFunc = (item) => {
        if (item == currentDate[0] && currentPage == showPage) {
            return { color: "white" }
        } else if (item == currentDate[1] && currentPage == showPage2) {
            return { color: "white" }
        }
        else {
            return { color: "gray" }
        }
    }

    const borderStyleFunc = (item) => {
        if (item == currentDate[0] && currentPage == showPage) {
            return { borderTopColor: "white", borderTopWidth: 2 }
        } else if (item == currentDate[1] && currentPage == showPage2) {
            return { borderTopColor: "white", borderTopWidth: 2 }
        }
        else {
            return { borderTopColor: "white", borderTopWidth: 0 }
        }
    }

    const [inCome, setInCome] = useState("")
    useEffect(() => {
        onSnapshot(dataPipeLine, (doc) => {
            setInCome(doc.data());
        })
    }, []);

    const market = inCome["market"]
    const marketNext = inCome["marketNext"]
    const aktuel = inCome["aktuel"]
    const aktuelNext = inCome["aktuelNext"]
    const marketDates = inCome["marketDates"]
    const aktuelDates = inCome["aktuelDates"]

    const [currentPage, setCurrentPage] = useState(market)
    const [colorMarket, setColorMarket] = useState("white")
    const [colorAktuel, setColorAktuel] = useState("gray")
    const [showPage, setShowPage] = useState(market)
    const [showPage2, setShowPage2] = useState(marketNext)
    const [currentDate, setCurrentDate] = useState(marketDates)
    const [text, setText] = useState("Haftanın Yıldızları")
    const [state, setState] = useState(true)

    useEffect(() => {
        setCurrentDate(marketDates)
    }, [marketDates, aktuelDates])


    useEffect(() => {
        setCurrentPage(market)
        setShowPage(market)
        setShowPage2(marketNext)
    }, [market])

    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView>
<<<<<<< HEAD
                <MarketHeader headerLogo={a101Logo} headertText={text} headerColor={a101Blue} textColor={"white"}  navigation={navigation}/>
=======
                <MarketHeader headerLogo={a101Logo} headertText={text} headerColor={a101Blue} textColor={"white"} navigation={navigation}/>
>>>>>>> b4de8afb6d6d1215b748192108e523f090cdc403
                <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: a101Blue, height: deviceHeight / 20, alignItems: "center" }}>
                    <TouchableOpacity style={[styles.touchableStyle,
                    currentDate == marketDates ? { borderBottomWidth: 2 } : {}
                    ]} onPress={() => {
                        setCurrentPage(market)
                        setColorMarket("white")
                        setColorAktuel("gray")
                        setShowPage(market)
                        setShowPage2(marketNext)
                        setCurrentDate(marketDates)
                        setText("Haftanın Yıldızları")
                        setState(true)

                    }}>
                        <Text style={{ color: colorMarket, fontSize: 15 , fontFamily:"Montserrat-Medium"}}>Haftanın Yıldızları</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableStyle, currentDate == aktuelDates ? { borderBottomWidth: 2 } : {}]} onPress={() => {
                        setCurrentPage(aktuel)
                        setColorAktuel("white")
                        setColorMarket("gray")
                        setShowPage(aktuel)
                        setShowPage2(aktuelNext)
                        setCurrentDate(aktuelDates)
                        setText("Aldın Aldın")
                        setState(false)
                    }}>
                        <Text style={{ color: colorAktuel, fontSize: 15 , fontFamily:"Montserrat-Medium" }}>Aldın Aldın</Text></TouchableOpacity>
                </View>
                <FlatList
                    data={currentPage}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{ paddingBottom: 2 }}
                                activeOpacity={1}
                                onPress={() => {
                                    navigation.navigate("FullScreen", item)
                                }}>
                                <ImageBackground
                                    style={styles.imageStyle}
                                    source={{ uri: item }} />
                                <FullBannerAds />
                            </TouchableOpacity>
                        )
                    }}
                />
                <View style={{ height: deviceWidht / 10 }}></View>
            </ScrollView>
            <View style={{
                backgroundColor: a101Blue,
                position: "absolute",
                flex: 1,
                bottom: 0,
                flexDirection: "row",
                alignItems: "center",
                width: deviceWidht,
                justifyContent: "space-around",
                height: deviceWidht / 10
            }}>

                <FlatList
                    columnWrapperStyle={{ justifyContent: "space-around" }} style={{ height: deviceWidht / 10 }}
                    horizontal={false}
                    numColumns={2}
                    data={currentDate}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={borderStyleFunc(item)} onPress={() => {
                                item == currentDate[0] ? setCurrentPage(showPage) : <></>
                                item == currentDate[0] ? setText(item) : <></>
                                item == currentDate[1] ? setCurrentPage(showPage2) : <></>
                                item == currentDate[1] ? setText(item) : <></>

                            }}>
                                <Text style={
                                    [styleFunc(item), { marginTop: 7  , fontFamily:"Montserrat-Medium"}]}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: deviceWidht * 1.5,
        width: deviceWidht,
        flex: 1,
        resizeMode: 'contain'
    },
    touchableStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "white",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height:deviceHeight/20
    }
})
export default A101
