
import 'react-native-gesture-handler';
import React from 'react';
import Dashboard from "./src/dashboard.js" 
import TopUp from "./src/topup"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialDashboard from 'react-native-vector-icons/MaterialIcons'
import MaterialTopUp from 'react-native-vector-icons/EvilIcons'
import MaterialMore from "react-native-vector-icons/Feather"

import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="dashboard"
      activeColor="white"
      inactiveColor="black"
     // style={{ background: 'red' }}
     barStyle={{backgroundColor:"#004445"}}
    >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialDashboard name="dashboard" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="topUp"
        component={TopUp}
        options={{
          tabBarLabel: 'Top Up',
          tabBarIcon: ({ color }) => (
            <MaterialTopUp name="plus" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={TopUp}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="notifications" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={TopUp}
        options={{
          tabBarLabel: 'more',
          tabBarIcon: ({ color }) => (
            <MaterialMore name="more-horizontal" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs