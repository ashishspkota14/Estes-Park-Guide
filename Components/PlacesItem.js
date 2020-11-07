 import React from 'react';
 import {View, Text,StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
 import Colors from '../constants/Colors';
 //import DefaultText from '../Components/DefaultText';  - styles are not being passed and merged as of now
 const PlacesItem = props => {

return(
    <View style={styles.placeItem}>
    <TouchableOpacity
    onPress = {props.onSelectPlaces}
    >
        <View> 
     <View style ={{...styles.placesRow, ...styles.placesHeader}}>
         <ImageBackground 
         source = {{uri:props.image}}
         style ={styles.bgImage}
         >
             <View style ={styles.titleContainer}>
        <Text
        style ={styles.title}
        numberOfLines={1}
        > {props.title} </Text>
        </View>
        </ImageBackground>
        </View>
    <View style={{...styles.placesRow, ...styles.placesDetail}}>
    <Text style={styles.googleStar} > {props.googleRating} </Text> 
    <Text style ={styles.address}> {props.address} </Text>
     </View>
     </View>
    
     </TouchableOpacity>
     </View>
     
);

};
     
const styles = StyleSheet.create({
placesRow:{
   flexDirection:'row'

},
bgImage:{
   
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
},

placeItem:{
    height:120,
    width:'100%',
    backgroundColor:'#DAE0E2',
    borderRadius:10,
    overflow:'hidden',
    marginTop:15

},
placesHeader:{
    height:'85%',

},
placesDetail:{
paddingHorizontal: 10,
justifyContent:'space-between',
alignItems:'center',
height:'15%'
},
title:{
    fontFamily:'raleway-blackItalic',
    fontSize:22,
    color: Colors.darkWhite
},
titleContainer:{
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical:5,
    paddingHorizontal:10
},
googleStar:{
  fontFamily: 'raleway-bold',
  color: Colors.darkGreen,
  fontSize: 16

},
address :{
    fontFamily:'raleway-bold',
    color: Colors.brightPurple
}

     });
 

 export default PlacesItem;