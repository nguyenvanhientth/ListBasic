import React from 'react';
import {View, Text, Button, Image, TextInput,ListView } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import HelloScreen from './HelloScreen';
import LoginScreen from './LoginScreen';
import GioScreen from './GioScreen'

const One = createStackNavigator({
  Login: { 
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  HelloName: {
    screen: HelloScreen,
    navigationOptions: {
      title: 'Hello'
    }
  },
  Gio: {
    screen: GioScreen,
    navigationOptions:{
      title: 'Gio'
    }
  }
  },
  {
    initialRouteName: 'Login'
  }
)
//-----------------------------------------------------------------------
export default class TrangChu extends React.Component{
  render() {
    return <One/>
  }
}
