import 'react-native-gesture-handler';
import React from 'react';
import Dashboard from './src/screens/Dashboard.js';
import TopUp from './src/screens/Topup';
import Notification from './src/screens/Notification';
import More from './src/screens/More';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialDashboard from 'react-native-vector-icons/MaterialIcons';
import MaterialTopUp from 'react-native-vector-icons/EvilIcons';
import MaterialMore from 'react-native-vector-icons/Feather';

import {NavigationContainer} from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="dashboard"
        activeColor="white"
        inactiveColor="black"
        barStyle={{backgroundColor: '#004445'}}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({color}) => (
              <MaterialDashboard name="dashboard" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="TopUp"
          component={TopUp}
          options={{
            tabBarLabel: 'Top Up',
            tabBarIcon: ({color}) => (
              <MaterialTopUp name="plus" color={color} size={28} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="notifications"
                color={color}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({color}) => (
              <MaterialMore name="more-horizontal" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;