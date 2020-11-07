import {Platform,TouchableOpacity, Text, StyleSheet,ScrollView,View,Button} from 'react-native';
import React from 'react';
import { Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import MapPreview from '../Components/MapPreview';
import WeatherPreview from '../Components/WeatherPreview';
import Colors from '../constants/Colors'; 

const LocationPreview = props =>{

     const pickOnMapHandler = () => {
        props.navigation.navigate('MapScreen');
      };
const pickOnWeatherHandler = ()=> {
    props.navigation.navigate('Weather');
};
   return (
        <ScrollView style ={{backgroundColor:"#786fa6"}}>
   <Text style={styles.headerTitle}> Estes Park </Text>

   <MapPreview
        style={styles.mapPreview}
        onPress={pickOnMapHandler}
      > 
      </MapPreview>


   <TouchableOpacity style={styles.buttonUp} >


       <Button
       color={Platform.OS==='ios'?Colors.darkWhite:Colors.brightPurple}
       title='VIEW MAP'
       onPress={pickOnMapHandler}>
       </Button>
   </TouchableOpacity>

<WeatherPreview 
style={styles.mapPreview}
onPress={pickOnWeatherHandler}
>

</WeatherPreview>

   <TouchableOpacity style={styles.button} >
       <Button
     
       title='VIEW WEATHER'
       color={Platform.OS==='ios'?Colors.darkWhite:Colors.brightPurple}
       onPress={pickOnWeatherHandler}>
       </Button>
   </TouchableOpacity>

   <TouchableOpacity style ={styles.buttonUp}>
    
    <Button

color={Platform.OS==='ios'?Colors.darkWhite:Colors.brightPurple}
title="Back"
onPress={() => {
    props.navigation.goBack(null);    //helps to go to main screen easy and quick
}}
/>
</TouchableOpacity>
   
   </ScrollView>

   );
};


const styles = StyleSheet.create({
    mapPreview: {
        marginTop:10,
        marginBottom: 10,
        width: '100%',
        height: 200,
        borderColor: '#ccc',
        borderWidth: 3,
        borderRadius:6
      },
      headerTitle:{
          fontFamily:'raleway-blackItalic',
          fontSize: 20,
          textAlign:'center',
          alignItems:'center',
          justifyContent:'center',
          color:Colors.darkWhite,
          marginTop:9
      },
      button:{
          textAlign:'center',
          color:Colors.darkWhite,
          width: 160,
          height: 40,
          marginRight:300
      },
      buttonUp:{
        textAlign:'center',
        width: 200,
        height: 40,
        marginLeft:Platform.OS ==='android' ?  270:220 
    }
});



LocationPreview.navigationOptions = navData => { 

    return {
    headerTitle: 'Maps and Weather',
    headerLeft:() => ( <HeaderButtons
    HeaderButtonComponent ={HeaderButton}>
    <Item 
    title = 'menu'
     iconName = 'ios-menu'
    onPress = {() => { 
        navData.navigation.toggleDrawer();   
    }}
    />

</HeaderButtons>
    )};
};

export default LocationPreview;