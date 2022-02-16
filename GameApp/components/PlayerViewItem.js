import { Image, Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react';


export default class PlayerViewItem extends Component {

  render() {
    const {playerSelectedItem, playerImage} = this.props
    return (
      <View style={styles.playerViewItem}>
          <View style={styles.bgPlayerViewItem}>
        <Image source={playerSelectedItem} style={styles.playerSelectedItem}/>
        </View>
        <View style={styles.triangle}/>
        <Image source={playerImage} style={styles.playerImage}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    playerViewItem:{
        // justifyContent:'space-between',
        alignItems:'center'
    },
    bgPlayerViewItem:{
        height: 80, 
        width:80,
        borderWidth:3,
        borderRadius:10,
        borderColor:'#c0bf2c',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        opacity:0.9
    },
    playerSelectedItem:{
        height: 65, 
        width:65,
      
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
    //   borderStyle: "solid",
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 15,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "#c0bf2c",
      
    },
    playerImage:{
        height: 100, 
        width:100,
    },

})