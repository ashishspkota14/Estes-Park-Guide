import React, {useEffect, useCallback} from 'react';
import {View, Text, StyleSheet,Platform,ScrollView,TouchableHighlight,Button,Linking,Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavourite} from '../store/actions/places';
import Icon from 'react-native-vector-icons/FontAwesome';
import getDirections from 'react-native-google-maps-directions';
import BackgroundCarousel from '../Components/BackgroundCarousel';
//import MyCarousel from '../Components/MyCarousel';
//import Carousel from '../Components/Carousel';
//import {data} from '../data/carousel-data';
//import SlideShow from '../Components/SlideShow';

const PlacesDetailScreen = props =>{
 
   // "https://source.unsplash.com/1024x768/?tree"
  //  require('./assets/images/girl.jpg'),
    const placesId = props.navigation.getParam('whichPlaceId'); 
    const availablePlaces = useSelector(state=>state.place.place);    
    const selectedPlace = availablePlaces.find( place => place.id === placesId);
    const images= [
     selectedPlace.imageUrl1,
     selectedPlace.imageUrl2,
     selectedPlace.imageUrl3,
  ];
    
    const handleGetDirections = () => {
        const data = {
             
           source: {
            
          },
          destination: {
            latitude:selectedPlace.latitude,
            longitude:selectedPlace.longitude
          
          },
        
          params: [
            {
              key: "travelmode",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: ""       // navigate value instantly initializes navigation using the given travel mode
            }
          ]
         }

         getDirections(data);
       };

const currentPlaceIsFavourite = useSelector(
   state => state.fav.favouritePlaces.some(place=>place.id===placesId));

    // destructor used to store it in brand new constant
  //  availablePlaces = useSelector(state=>state.place.place); 
   // selectedPlace = availablePlaces.find( place => place.id === placesId);

const dispatch = useDispatch();

const toggleFavouriteHandler = useCallback(() => {

    dispatch(toggleFavourite(selectedPlace.id));

}, [dispatch,placesId]);



useEffect(() => {

   props.navigation.setParams({ toggleFav: toggleFavouriteHandler});
 //   props.navigation.setParams({placeTitle: selectedPlace.title});
}, [toggleFavouriteHandler]);


useEffect(()=> {
   props.navigation.setParams({isFavs: currentPlaceIsFavourite});
},[currentPlaceIsFavourite])

    return(

        <ScrollView
       style={{backgroundColor:Colors.darkWhite}} >
       
         <BackgroundCarousel images={images}/>
         
     <View style={{flexDirection:'row',alignContent:'space-around'}}>
<TouchableHighlight style={styles.Button}>
 <Button
color={Colors.brightPurple}
onPress={handleGetDirections} title="Get Directions" />
</TouchableHighlight>

<TouchableHighlight  style={styles.Button}>
  <Button
  title="Open website"
  color={Colors.brightPurple}
  onPress={() =>  { Linking.openURL(selectedPlace.website)} }
  />
 </TouchableHighlight>    

 <TouchableHighlight style={styles.Button}>
 <Button
color={Colors.brightPurple}
title= {Platform.OS==='android'?"            Call          ":"Call    " }
onPress={() => {  Linking.openURL(Platform.OS==='android'?`tel:${selectedPlace.phoneNumber}`: `tel://${selectedPlace.phoneNumber}`) } }
/>
</TouchableHighlight> 

 </View>  

 <Text style={styles.title}> General </Text> 

    {selectedPlace.generalDetails.map(gDetail=> (
        <View 
        style={styles.detailItem}
        key= {gDetail}>
    <Text 
    style={ styles.detailText
    }
    //detailList is not working as a warapping component here
     key = {gDetail}>{gDetail}</Text>
     </View>
     ))}
    
<Text style={styles.title}> What's Here? </Text> 

         <View style={styles.detailItem}>
    <Text 
    style={styles.whatIsHere}
     >{selectedPlace.whatIsHere}</Text>
      </View>
</ScrollView>
    );
};


PlacesDetailScreen.navigationOptions = navigationData => {
 //  const placesId =   navigationData.navigation.getParam('whichPlaceId');

   const isFavourite =navigationData.navigation.getParam('isFavs');
   const placeTitle = navigationData.navigation.getParam('placeTitle');
   const toggleFavourite = navigationData.navigation.getParam('toggleFav'); 
   const iconName = isFavourite? 'star' :'star-o';
   return {
       
      headerTitle: placeTitle,
     headerRight:() => (
  //needs to get animation for star icon in android

   <TouchableHighlight
      onPress={toggleFavourite}
      style={styles.starIcon}
      underlayColor={Platform.OS==='android'?Colors.brightPurple:Colors.darkWhite}
      //onPress={ ()=>{alert(alertMsg)}}
      >
         
       <Icon 
          name ={iconName}
          size={33}
          color={Platform.OS === 'android'?Colors.darkWhite:Colors.brightPurple}
          /> 

     </TouchableHighlight>
     /* 
      <HeaderButtons 
      HeaderButtonComponent = {
         HeaderButton
      }> 
          <Item
         title = 'Favourite'
         iconName={ headerRightIcon }  
         onPressIn= {toggleFavourite}
         onPress={()=> {alert(alertMsg)}}
          />
           
           </HeaderButtons>
          */
      
     )};
};


const styles = StyleSheet.create({
imageStyle:{
width:'100%',
height: 220
},
details:{
    flexDirection:'row',
    padding:15,
    justifyContent:'space-around'
},
title:{
    fontFamily: 'raleway-bold',
    color: Colors.darkWhite,
    padding:10,
    backgroundColor:Colors.brightPurple,
    fontSize:22,
    textAlign: 'center',
    marginTop:10

},

detailText:{
    fontSize:16,
    fontFamily: 'raleway-blackItalic',
    color: Colors.black,
    textAlign:'left'
},
whatIsHere:{
  fontSize:15,
    fontFamily: 'raleway-bold',
    color: Colors.black,
    textAlign:'left'
},
detailItem:{
   // marginVertical:10,
  //  marginHorizontal: 20,
    borderColor:Colors.darkWhite,
    borderWidth: 3,
    padding: 12,
    backgroundColor:Colors.darkWhite
},
googleStar:{
fontFamily: 'raleway-bold',
textAlign:'auto',
color:Colors.brightPurple
},

address:{
    fontFamily: 'raleway-bold',
    textAlign:'auto',
    color: Colors.brightPurple
},
headerRight:{
    padding: 10,
    marginRight:10
},
favourite:{
    marginVertical:15,
    marginHorizontal: 30,
    borderColor:Colors.brightPurple,
    borderWidth: 6,
    padding: 15,
    backgroundColor:Colors.darkGreen
},

starIcon:{
    marginLeft:5,
    marginRight:20
    
},
Button:{
borderRadius:Platform.OS==='android'?10: 8,    
marginVertical:Platform.OS==='android'? 8 : 4,
marginHorizontal:Platform.OS==='android'? 7 : 3,
borderColor:Colors.brightPurple,
borderWidth: Platform.OS==='android'? 2 : 1,
padding: Platform.OS==='android'? 8 : 1,
backgroundColor:Colors.darkWhite,
},
description:{
  marginTop:2,
  height:350,
  width:Dimensions.get('window').width,
  alignContent:'space-around',
  borderRadius:7,
  shadowOffset: { width: 0, height:4 },
  shadowOpacity: 0.8,
  shadowRadius: 5,  
  elevation: 5,
  shadowColor:Colors.brightPurple
}
});

export default PlacesDetailScreen;


       // onPress={() => {
      //  props.navigation.popToTop();    //helps to go to main screen easy and quick
       // }}
     

      // <Image
     //  source = {{uri:selectedPlace.imageUrl}}
    //   style={styles.imageStyle}
     //  />

    // <Text style={styles.title}> More images </Text> 
    // <View style={styles.description}>
    // <BackgroundCarousel images={images}/>
    // </View>