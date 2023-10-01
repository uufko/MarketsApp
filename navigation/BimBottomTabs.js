import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bim from '../src/screens/Bim';
import BimMarket from '../src/screens/BimMarket';
const Tab = createBottomTabNavigator();

const BimBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Market Ürünler' component={BimMarket} options={{ headerShown: false }} options={{
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarActiveTintColor:"white",
        tabBarStyle: { borderRadius: 0, backgroundColor: "#ed1c24",height:35},
        tabBarIconStyle:{display:"none"}
      }} />
      <Tab.Screen name='Aktüel Ürünleri' component={Bim} options={{ headerShown: false }} options={{
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarActiveTintColor:"white",
        tabBarStyle: { borderRadius: 0, backgroundColor: "#ed1c24",height:35},
        tabBarIconStyle:{display:"none"}
      }} />
    </Tab.Navigator>
  )
}

export default BimBottomTabs