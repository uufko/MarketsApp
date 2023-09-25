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
import BimPage1 from './src/screens/BimPages/BimPage1';
import BimPage2 from './src/screens/BimPages/BimPage2';
import BimPage3 from './src/screens/BimPages/BimPage3';
import BimPage4 from './src/screens/BimPages/BimPage4';
import BimPage5 from './src/screens/BimPages/BimPage5';
import SokPage1 from './src/screens/SokPages/SokPage1';
import SokPage2 from './src/screens/SokPages/SokPage2';

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
        <Stack.Screen name='A101Page3' component={A101Page3}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101Page4' component={A101Page4}
          options={{ headerShown: false }} />
        <Stack.Screen name='SokPage1' component={SokPage1}
          options={{ headerShown: false, }} />
        <Stack.Screen name='SokPage2' component={SokPage2}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({})
export default App;