import { View, Text, SafeAreaView, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import FullBannerAds from '../../components/ads/FullBannerAds'
import MarketHeader from '../../components/MarketHeader'

const dataPipeLine = doc(db, "data", "sok")
let deviceWidht = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const sokYellow = "#ffe001"
const sokLogo = require("../../assets/images/soklogo.png")

const Sok = ({ navigation }) => {

    const styleFunc = (item) => {
        if (item == currentDate[0] && currentPage == showPage) {
            return { color: "black" }
        } else if (item == currentDate[1] && currentPage == showPage2) {
            return { color: "black" }
        }
        else {
            return { color: "gray" }
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
    const [colorMarket, setColorMarket] = useState("black")
    const [colorAktuel, setColorAktuel] = useState("gray")
    const [showPage, setShowPage] = useState(market)
    const [showPage2, setShowPage2] = useState(marketNext)
    const [currentDate, setCurrentDate] = useState(marketDates)
    const [text, setText] = useState("Çarşamba Fırsatları")

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
                <MarketHeader headerColor={sokYellow} headerLogo={sokLogo} headertText={text} textColor={"black"} />
                <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: sokYellow, height: deviceHeight / 20 }}>
                    <TouchableOpacity style={[styles.touchableStyle, currentPage == market ? { borderBottomWidth: 2 } : { borderBottomWidth: 0 }]} onPress={() => {
                        setCurrentPage(market)
                        setColorMarket("black")
                        setColorAktuel("#8b8987")
                        setShowPage(market)
                        setShowPage2(marketNext)
                        setCurrentDate(marketDates)
                        setText("Çarşamba Fırsatları")

                    }}>
                        <Text style={{ color: colorMarket , fontFamily:"Montserrat-Medium" }}>Çarşamba Fırsatları</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableStyle, currentPage == aktuel ? { borderBottomWidth: 2 } : { borderBottomWidth: 0 }]} onPress={() => {
                        setCurrentPage(aktuel)
                        setColorAktuel("black")
                        setColorMarket("#8b8987")
                        setShowPage(aktuel)
                        setShowPage2(aktuelNext)
                        setCurrentDate(aktuelDates)
                        setText("Cumatesi Fırsatları")
                    }}>
                        <Text style={{ color: colorAktuel  , fontFamily:"Montserrat-Medium"}}>Cumatesi Fırsatları</Text></TouchableOpacity>
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
                backgroundColor: sokYellow,
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
                    columnWrapperStyle={{ justifyContent: "space-around" }}
                    horizontal={false}
                    numColumns={2}
                    data={currentDate}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                item == currentDate[0] ? setCurrentPage(showPage) : <></>
                                item == currentDate[0] ? setText(item) : <></>
                                item == currentDate[1] ? setCurrentPage(showPage2) : <></>
                                item == currentDate[1] ? setText(item) : <></>

                            }}>
                                <Text style={
                                    [styleFunc(item) , {fontFamily:"Montserrat-Medium"}]}>{item}</Text>
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
        borderBottomColor: "black"
    },
    toolBarImageStyle: {
        marginTop: 5,
        resizeMode: "contain",
        height: deviceHeight / 18,
        width: deviceHeight / 8
    }
})
export default Sok