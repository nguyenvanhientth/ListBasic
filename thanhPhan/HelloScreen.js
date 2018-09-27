import React from 'react';
import {View, Text, Button, Image, TextInput,ListView,refreshControl} from 'react-native';

var mang = ['San 1','San 2','San 3','San 4','San 5','San 6','San 7','San 8','San 9','San 10','San 11','San 12','San 13','San 14'];

export default class HelloScreen extends React.Component{
    constructor (){
      super();
      this.state = {
        loading: false,
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2,}),
        query: "",
        fullData: [],
        //refreshing:false
      };
    }
    // loadNewData(){
    //   this.setState({
    //     refreshing:true
    //   })
    // }
    _onPress(){
      this.props.navigation.navigate('Gio') }
    handleSearch = (text) => {
      console.log("text",text);
      this.setState({ query: text });
    };
    render(){
      return (
        <View style={{flex:1}}>
          <Text style = {{ alignItems:'center'}}>Xin chao ban:{this.props.navigation.state.params.thamso}</Text>
          <Text>Moi ban chon san phu hop!</Text>
          <ListView
            // refreshControl ={
            //  <refreshControl
            //  refreshing={this.state.refreshing}
            //   onRefresh={this.loadNewData.blind(this)}
            //  />
           //}
            dataSource = {this.state.dataSource}
            renderRow = {(r)=>
              <View style={{padding:20, borderWidth:1}}>
                <Text onPress={this._onPress.bind(this,{San: this.state.san})}>{r}</Text>
              </View>
            }
          />
          <TextInput placeholder="Nhap ten san..." onChangeText={this.handleSearch} />
        </View>
      );
    }
    componentWillMount(){

      //var iterator = mang.values();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(mang),
        san: mang.values,
      })
      
    }
  }