import React from 'react';
import {View, Text, Button, Image, TextInput,ListView } from 'react-native';

export default class LoginScreen extends React.Component{
    constructor(props){
      super(props);
      this.state = { text: '' };  }
    render(){
      return (
        <View style = {{borderRadius: 30}}>
          <View style={{padding:35,backgroundColor:'steelblue',marginTop: 50}}>
            <TextInput
              style = {{height:50, backgroundColor:'#DDDDDD',borderRadius:15}}
              placeholder = "Tài khoản"
              onChangeText={(text) => this.setState({text})}
              />
            <TextInput
              style = {{height: 50, marginTop: 10,backgroundColor:'#DDDDDD',borderRadius:15}}
              placeholder = "Mật khẩu"
              visible-password = "password"
              secureTextEntry = {true}
              //onChangeText = {(text) => this.setState({})}
              />
          </View>
          <View style = {{paddingBottom:30, justifyContent:'center',backgroundColor:'steelblue',flexDirection: 'row'}}>
            <View style = {{justifyContent: 'space-between'}}>
              <Button            
                onPress = {()=>{this.props.navigation.navigate('HelloName',{thamso: this.state.text  })}}
                title = " Đăng nhập "
                />
            </View>
            <View style = {{justifyContent: 'space-between',marginLeft:30}}>
              <Button
                onPress = {()=>this.props.navigation.navigate('Login')}
                title = " Đăng ký "
              />
            </View>
          </View>
        </View>
      );
    }
  }