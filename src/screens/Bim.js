import { View, Text, SafeAreaView, FlatList, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase/config'
import FullBannerAds from '../../components/ads/FullBannerAds'
import MarketHeader from '../../components/MarketHeader'
import { Style } from './Style'
import { Color, Metarial } from '../material/Material'

const dataPipeLine = doc(db, "data", "bim")
let deviceWidht = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

const Bim = ({ navigation }) => {

    const bottomBatStyleFunc = (item) => {
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

    const bottomBarFunc = ({ item }) => {
        if (item == currentDate[0]) {
            setCurrentPage(showPage)
            setText(item)
        }
        else if (item == currentDate[1]) {
            setCurrentPage(showPage2)
            setText(item)
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
    const [text, setText] = useState("Market Ürünleri")

    useEffect(() => {
        setCurrentDate(marketDates)
    }, [marketDates])


    useEffect(() => {
        setCurrentPage(market)
        setShowPage(market)
        setShowPage2(marketNext)
    }, [market])

    return (
        <SafeAreaView style={Style.container}>
            <ScrollView>
                <MarketHeader headerLogo={Metarial.bimLogo} headerColor={Color.bimRed} headertText={text} textColor={"white"} />
                <View style={Style.navBarViewStyle}>
                    <TouchableOpacity style={[Style.touchableStyle, currentDate == marketDates ? { borderBottomWidth: 2 } : {}]}
                        onPress={() => {
                            setCurrentPage(market)
                            setColorMarket("white")
                            setColorAktuel("gray")
                            setShowPage(market)
                            setShowPage2(marketNext)
                            setCurrentDate(marketDates)
                            setText("Market Ürünleri")
                        }}>
                        <Text style={[{ color: colorMarket, fontSize: 15 }, currentDate == marketDates ? {} : {}]}>Market Ürünleri</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[Style.touchableStyle, currentDate == aktuelDates ? { borderBottomWidth: 2 } : {}]}
                        onPress={() => {
                            setCurrentPage(aktuel)
                            setColorAktuel("white")
                            setColorMarket("gray")
                            setShowPage(aktuel)
                            setShowPage2(aktuelNext)
                            setCurrentDate(aktuelDates)
                            setText("Aktüel Ürünler")
                        }}>
                        <Text style={{ color: colorAktuel, fontSize: 15 }}>Aktüel Ürünler</Text>
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
                                    style={Style.imageStyle}
                                    source={{ uri: item }} />
                                <FullBannerAds />
                            </TouchableOpacity>
                        )
                    }}
                />
                <View style={{ height: deviceWidht / 10 }}></View>
            </ScrollView>
            <View style={Style.bottomBarStyle}>

                <FlatList
                    columnWrapperStyle={{ justifyContent: "space-around" }} style={{ height: deviceWidht / 10 }}
                    horizontal={false}
                    numColumns={2}
                    data={currentDate}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={borderStyleFunc(item)} onPress={() => {
                                bottomBarFunc({ item })
                            }}>
                                <Text style={
                                    [bottomBatStyleFunc(item), { marginTop: 7 }]}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </SafeAreaView >
    )
}

export default Bim