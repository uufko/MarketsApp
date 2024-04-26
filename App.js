import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import FullScreen from './components/FullScreen';
import UA101 from './src/screens/A101Page/uA101';
import USok from './src/screens/SokPage/uSok';
import UBim from './src/screens/BimPage/uBim';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name='UBim' component={UBim}
          options={{ headerShown: false }} />
        <Stack.Screen name='UA101' component={UA101}
          options={{ headerShown: false }} />
        <Stack.Screen name='USok' component={USok}
          options={{ headerShown: false }} />
        <Stack.Screen name='FullScreen' component={FullScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer></Provider>
  )
}
export default App;