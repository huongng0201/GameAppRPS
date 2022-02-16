import { Text, View, Image, StyleSheet, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity, Button } from 'react-native'
import React, { Component } from 'react';
import {Rock, Background, Player, Bot, Paper, Scissor} from './assets'
import PlayerViewItem from './components/PlayerViewItem';
import PlayerSelectItem from './components/PlayerSelectItem';
import ButtonItem from './components/ButtonItem';
import LinearGradient from 'react-native-linear-gradient'
export default class index extends Component {
  render() {
    return (
      <ImageBackground source={Background} style={{flex:1}}>
          <SafeAreaView style={styles.areaView} >
              <View style={styles.overlay}/>
              <StatusBar hidden={false} barStyle='light-content'/>
        {/* <Text>index</Text>
        <Image source={Rock} style={{height:80, width:80} }/> */}
        <View style={styles.playerView}>
            <PlayerViewItem  playerSelectedItem={Rock} playerImage={Player} />
            <PlayerViewItem  playerSelectedItem={Paper} playerImage={Bot} />
        </View>
        <View style={styles.selectedView}>
            <PlayerSelectItem selectedItem={Rock} />
            <PlayerSelectItem selectedItem={Paper} />
            <PlayerSelectItem selectedItem={Scissor} />
        </View>
        <View style={styles.infoView}>
            <Text style={styles.textContent}>Score: 0</Text>
            <Text style={styles.textContent}>Times: 9</Text>
        </View>

        <View style={styles.btnView}>
           <ButtonItem title="Play" colors={['#ff80ab','#c94f7c']}/>
           <ButtonItem title="Reset" colors={['#ffee58', '#c9bc1f']}/>
        </View>
      

        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    areaView:{
flex:1
    },
    playerView:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
       
    },
    selectedView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    infoView:{
        flex:1,
       alignItems:'center',
     
    },
    textContent:{
        fontSize: 35,
        fontWeight:'bold',
        color: '#5ddef4'
    },
    btnView:{
        flex:2,
      flexDirection:'row',
      justifyContent:'space-around',
      paddingHorizontal:60,
      marginTop:40
    
    },
    overlay:{
        position:'absolute',
        right:0,
        left:0,
        bottom: 0,
        top:0,
        opacity:0.5,
        backgroundColor:'black'
    },
  
})