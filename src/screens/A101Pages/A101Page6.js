import { View, ImageBackground, Dimensions } from "react-native"
import ImageZoom from 'react-native-image-pan-zoom';

let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;
const A101Page6 = ({route}) => {
  const page = route.params;
  
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>

      <ImageZoom cropWidth={deviceWidht}
        cropHeight={deviceHeight}
        imageWidth={deviceWidht}
        imageHeight={deviceHeight}>
        <ImageBackground source={{ uri: (page) }} style={{ flex: 1 }} resizeMode='contain' />
      </ImageZoom>
    </View>
  )
}

export default A101Page6