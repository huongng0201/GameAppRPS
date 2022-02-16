import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import GameApp from './GameApp';

export default class App extends Component {
  render() {
    return (
      <View style ={styles.container}>
       <GameApp />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
      // justifyContent: 'center',
      // alignItems:'center',
      flex:1,
     
  }
})