import React from 'react';
import {View, Text, Button, Image, TextInput,ListView } from 'react-native';

export default class HelloScreen extends React.Component{
    constructor (){
      super();
      this.state = {
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2,})
      };
    }
    _onPress(){
      this.props.navigation.popToTop() }
    render(){
      return (
        <View style={{flex:1}}>
          <Text style = {{ alignItems:'center'}}>Xin chao ban:</Text>
          <Text>Moi ban chon gio dat san!</Text>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow = {(r)=>
              <View style={{padding:20, borderWidth:1}}>
                <Text onPress={this._onPress.bind(this)}>{r}</Text>
              </View>
          }
        />
        </View>
      );
    }
    componentWillMount(){
      var mang = ['1111','22222','3333','4444','5','6','7','8','9','10','11','12','13','14']
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(mang),
      })
    }
  }