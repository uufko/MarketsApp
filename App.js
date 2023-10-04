import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Bim from './src/screens/Bim';
import A101 from './src/screens/A101';
import Sok from './src/screens/Sok';
import A101Page1 from './src/screens/A101Pages/A101Page1';
import A101Page2 from './src/screens/A101Pages/A101Page2';
import A101Page3 from './src/screens/A101Pages/A101Page3';
import A101Page4 from './src/screens/A101Pages/A101Page4';
import A101Page5 from './src/screens/A101Pages/A101Page5';
import A101Page6 from './src/screens/A101Pages/A101Page6';
import A101Page7 from './src/screens/A101Pages/A101Page7';
import A101Page8 from './src/screens/A101Pages/A101Page8';
import A101Page9 from './src/screens/A101Pages/A101Page9';
import BimPage1 from './src/screens/BimPages/BimPage1';
import BimPage2 from './src/screens/BimPages/BimPage2';
import BimPage3 from './src/screens/BimPages/BimPage3';
import BimPage4 from './src/screens/BimPages/BimPage4';
import BimPage5 from './src/screens/BimPages/BimPage5';
import BimPage6 from './src/screens/BimPages/BimPage6';
import BimPage7 from './src/screens/BimPages/BimPage7';
import BimPage8 from './src/screens/BimPages/BimPage8';
import BimPage9 from './src/screens/BimPages/BimPage9';
import SokPage1 from './src/screens/SokPages/SokPage1';
import SokPage2 from './src/screens/SokPages/SokPage2';
import SokPage3 from './src/screens/SokPages/SokPage3';
import SokPage4 from './src/screens/SokPages/SokPage4';
import SokPage5 from './src/screens/SokPages/SokPage5';
import SokPage6 from './src/screens/SokPages/SokPage6';
import SokPage7 from './src/screens/SokPages/SokPage7';
import SokPage8 from './src/screens/SokPages/SokPage8';
import SokPage9 from './src/screens/SokPages/SokPage9';
import SokButtomTabs from './navigation/SokButtomTabs';
import A101BottomTabs from './navigation/A101BottomTabs';
import BimBottomTabs from './navigation/BimBottomTabs';
import BimMarket from './src/screens/BimMarket';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Marketler" component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Bim" component={Bim}
          options={{ headerShown: false }} />
        <Stack.Screen name="Sok" component={Sok}
          options={{ headerShown: false }} />
        <Stack.Screen name="A101" component={A101}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page1' component={A101Page1}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page2' component={A101Page2}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page3' component={A101Page3}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page4' component={A101Page4}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page5' component={A101Page5}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page6' component={A101Page6}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page7' component={A101Page7}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page8' component={A101Page8}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page9' component={A101Page9}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage1' component={BimPage1}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage2' component={BimPage2}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage3' component={BimPage3}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage4' component={BimPage4}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage5' component={BimPage5}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage6' component={BimPage6}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage7' component={BimPage7}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage8' component={BimPage8}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimPage9' component={BimPage9}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage1' component={SokPage1}
          options={{ headerShown: false, }} />
        <Stack.Screen name='SokPage2' component={SokPage2}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage3' component={SokPage3}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage4' component={SokPage4}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage5' component={SokPage5}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage6' component={SokPage6}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage7' component={SokPage7}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage8' component={SokPage8}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage9' component={SokPage9}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimBottomTabs' component={BimBottomTabs}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101BottomTabs' component={A101BottomTabs}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokButtomTabs' component={SokButtomTabs}
          options={{ headerShown: false }} />
        <Stack.Screen name='BimMarket' component={BimMarket}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({})
export default App;