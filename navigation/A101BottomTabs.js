import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import A101 from '../src/screens/A101';
import A101Market from '../src/screens/A101Market';
const Tab = createBottomTabNavigator();

const A101BottomTabs = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name='Haftanın Yıldızları' component={A101Market} options={{ headerShown: false }} 
      options={{ tabBarLabelPosition:"beside-icon",
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor:"#808080",
      headerShown: false , 
      tabBarStyle:{borderRadius:0, backgroundColor:"#00abc7" ,height:35} ,
      tabBarIconStyle:{display:"none"}
    }}/>
      <Tab.Screen name='Aldın Aldın' component={A101} options={{ headerShown: false }} 
      options={{ tabBarLabelPosition:"beside-icon",
      tabBarActiveTintColor:"white",
      tabBarInactiveTintColor:"#808080",
      headerShown: false , 
      tabBarStyle:{borderRadius:0, backgroundColor:"#00abc7",height:35} ,
      tabBarIconStyle:{display:"none"}
    }} />
    </Tab.Navigator>
  )
}

export default A101BottomTabs