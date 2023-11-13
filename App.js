import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Bim from './src/screens/Bim';
import A101 from './src/screens/A101';
import Sok from './src/screens/Sok';
import FullScreen from './components/FullScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name='Bim' component={Bim}
          options={{ headerShown: false }} />
        <Stack.Screen name='A101' component={A101}
          options={{ headerShown: false }} />
        <Stack.Screen name='Sok' component={Sok}
          options={{ headerShown: false }} />
        <Stack.Screen name='FullScreen' component={FullScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;