import { View, Text, SafeAreaView, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import FullBannerAds from '../../components/ads/FullBannerAds'

const dataPipeLine = doc(db, "data", "bim")
let deviceWidht = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const bimRed = "#ed1c24"

const Bim = ({ navigation }) => {

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
    const [text, setText] = useState("Bu Hafta")

    useEffect(() => {
        setCurrentDate(marketDates)
    }, [marketDates])


    useEffect(() => {
        setCurrentPage(market)
        setShowPage(market)
        setShowPage2(marketNext)
    }, [market])


    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: bimRed }}>
                    <Image source={require("../../assets/images/bimlogo.png")} style={{ marginTop: 5, resizeMode: "contain", height: deviceHeight / 18, width: deviceHeight / 8 }} />
                    <Text style={{ fontSize: 12, opacity: .5, color: "white" }}>{text}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: bimRed }}>
                    <TouchableOpacity style={[styles.touchableStyle, currentDate == marketDates ? { borderBottomWidth: 1 } : { borderBottomWidth: 0 }]} onPress={() => {
                        setCurrentPage(market)
                        setColorMarket("white")
                        setColorAktuel("gray")
                        setShowPage(market)
                        setShowPage2(marketNext)
                        setCurrentDate(marketDates)
                        setText("Bu Hafta")
                    }}>
                        <Text style={{ color: colorMarket }}>Market Ürünleri</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.touchableStyle, currentDate == aktuelDates ? { borderBottomWidth: 1 } : { borderBottomWidth: 0 }]} onPress={() => {
                        setCurrentPage(aktuel)
                        setColorAktuel("white")
                        setColorMarket("gray")
                        setShowPage(aktuel)
                        setShowPage2(aktuelNext)
                        setCurrentDate(aktuelDates)
                        setText("Bu Hafta")
                    }}>
                        <Text style={{ color: colorAktuel }}>Aktüel Ürünler</Text>
                    </TouchableOpacity>


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
                backgroundColor: bimRed,
                position: "absolute",
                flex: 1,
                bottom: 0,
                flexDirection: "row",
                width: deviceWidht,
                height: deviceWidht / 10
            }}>

                <FlatList
                    columnWrapperStyle={{ justifyContent: "space-around"}} style={{ height: deviceWidht / 10 }}
                    horizontal={false}
                    numColumns={2}
                    data={currentDate}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={borderStyleFunc(item)} onPress={() => {
                                item == currentDate[0] ? setCurrentPage(showPage) : <></>
                                item == currentDate[0] ? setText("Bu Hafta") : <></>
                                item == currentDate[1] ? setCurrentPage(showPage2) : <></>
                                item == currentDate[1] ? setText("Gelecek Hafta") : <></>

                            }}>
                                <Text style={
                                    [styleFunc(item), {marginTop:7}]}>{item}</Text>
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
        borderBottomColor: "white"
    }
})
export default Bim