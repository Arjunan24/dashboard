/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import 'react-native-gesture-handler';
import {createAppContainer} from "react-navigation"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


function Dashboard(){
  return(
    <View>
      <Text>Dashboard</Text>
      </View>
  )
}
function TopUp(){
  return(
    <View>
      <Text>Dashboard</Text>
      </View>
  )
}
function Notification(){
  return(
    <View>
      <Text>Dashboard</Text>
      </View>
  )
}
function more(){
  return(
    <View>
      <Text>Dashboard</Text>
      </View>
  )
}

const TabNavigator=createMaterialBottomTabNavigator(
  {
    Dashboard:{screen:Dashboard},
    TopUp:{screen:TopUp},
    Notification:{screen:Notification},
    more:{screen:more},
  },
  {
    initialRouteName:"Daschboard",
  activeColor:"#f0edf6",
  inactiveColor:"#3e2465",
  barStyle:{ backgroundColor: '#694fad' }

  }
)


const styles = StyleSheet.create({
 createAppContainer:{
   flex:1,
   justifyContent:"center",
   alignItems:"center"
 }
});

export default createAppContainer(TabNavigator);
