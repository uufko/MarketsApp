import React, { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import { View, ImageBackground, Dimensions } from "react-native"
import ImageZoom from 'react-native-image-pan-zoom';

let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;

const dataPipeLine = doc(db,"data","bimpages")

const BimPage1 = () => {
    const [inCome, setInCome] = useState("")

useEffect(() => {
  onSnapshot(dataPipeLine, (doc) => {
    setInCome(doc.data());
  })
}, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ImageZoom cropWidth={deviceWidht}
        cropHeight={deviceHeight}
        imageWidth={deviceWidht}
        imageHeight={deviceHeight}>
        <ImageBackground source={{ uri: (inCome["page1"]) }} style={{ flex: 1 }} resizeMode='contain' />
      </ImageZoom>
    </View>
  )
}

export default BimPage1
