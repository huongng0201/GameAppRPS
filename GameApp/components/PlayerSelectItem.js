import { Image, Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react';


export default class PlayerSelectItem extends Component {

  render() {
    const {selectedItem} = this.props
    return (
      <View style={styles.selectedViewItemContainer}>
        <Image source={selectedItem} style={styles.selectedViewItem}/>
      
      </View>
    )
  }
}
const styles=StyleSheet.create({
    selectedViewItemContainer:{
        height: 60,
        width:60,
        borderWidth:3,
        borderRadius:10,
        borderColor:'#c0bf2c',
        margin:15,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'black',
       opacity: 0.9
    },
selectedViewItem:{
    height: 40, 
    width:40,
    alignSelf:'center'
   
},
selectedItem:{
    flexDirection:'row'
}
})