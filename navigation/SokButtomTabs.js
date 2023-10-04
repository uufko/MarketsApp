import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sok from '../src/screens/Sok';
import SokMarket from '../src/screens/SokMarket';
const Tab = createBottomTabNavigator();

const SokButtomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Haftanın Fırsatları' component={SokMarket} options={{
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#808080",
        tabBarStyle: { borderRadius: 0, backgroundColor: "#ffe001", height:45},
        tabBarIconStyle: { display: "none" }
      }} />
      <Tab.Screen name='Hafta Sonu Fırsatları' component={Sok} options={{
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#808080",
        tabBarStyle: { borderRadius:0, backgroundColor: "#ffe001", height:45},
        tabBarIconStyle: { display: "none" }
      }} />
    </Tab.Navigator>
  )
}

export default SokButtomTabs