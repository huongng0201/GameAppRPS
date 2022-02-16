import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default class ButtonItem extends Component {
  render() {
    const {title, colors}=this.props
    return (
        <View style={styles.btnView}>
     
            <TouchableOpacity  onPress={()=>btn()}>
            <LinearGradient colors={colors} style={styles.playbtn} >
                <Text style={styles.textPlaybtn}>{title}</Text>
                </LinearGradient>  
            </TouchableOpacity>
          
        
        </View>
    
    )
  }
}
const styles=StyleSheet.create({
btnView:{
    flex:2,
  flexDirection:'row',
  justifyContent:'space-around',
  paddingHorizontal: 60

},

playbtn:{
  height: 40,
  width:120,
  backgroundColor:'red',
  borderRadius: 8,
  justifyContent:'center',
  alignItems:'center'
},
textPlaybtn:{
fontSize: 25,
fontWeight:'bold',
color: '#ffffff'
}
})