import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { View, ImageBackground, Dimensions } from "react-native"
import ImageZoom from 'react-native-image-pan-zoom';

let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;
const dataPipeLine = doc(db, "data", "a101pages")
const A101Page2 = () => {
  const [inCome, setInCome] = useState("")

  useEffect(() => {
    onSnapshot(dataPipeLine, (doc) => {
      setInCome(doc.data());
    })
  }, []);
  const page2 = "https://ayb.akinoncdn.com/cms/2023/09/15/27bdadf6-a57e-47da-9326-ee496e757130.jpg"
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>

      <ImageZoom cropWidth={deviceWidht}
        cropHeight={deviceHeight}
        imageWidth={deviceWidht}
        imageHeight={deviceHeight}>
        <ImageBackground source={{ uri: (inCome["page2"]) }} style={{ flex: 1 }} resizeMode='contain' />
      </ImageZoom>
    </View>
  )
}

export default A101Page2

