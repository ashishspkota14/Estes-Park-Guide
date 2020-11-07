
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import PlacesList from '../Components/PlacesList';
import { Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

const FavouritesScreen = props =>{
 const favPlace = useSelector(state=> state.fav.favouritePlaces);
 //const favPlaces = PLACES.filter(place=> place.id ==='p1' || place.id ==='p5');   -- this thing will be useful in featured screen


 if  (favPlace.length=== 0 || !favPlace ) {
return (
    <View style= {styles.content}>
        <Text style={styles.text}>You don't have any Favourites! </Text>
        <View style={styles.iconStar}>
        <Text style={styles.text}>Press </Text>
        <Ionicons
        style={styles.starIcon}
        name={Platform.OS==='android'?'ios-star':'md-star'}
        size={17}
        color={Colors.darkGreen}
        />
        <Text style={styles.text}> icon to interact. </Text>
        </View>
    </View>
);
 }

 return (
       <PlacesList
       listData={favPlace}
       navigation ={props.navigation}/>
    );
};


FavouritesScreen.navigationOptions = navData => { 
    return{
    headerTitle: 'Your Favourites!',
    headerLeft:() => ( <HeaderButtons
    HeaderButtonComponent ={HeaderButton}>
    <Item 
    title = 'Tab'
    iconName = 'ios-menu'
    onPress = {() => {
        navData.navigation.toggleDrawer();
    }}/>

</HeaderButtons>),
 
    };
};


const styles = StyleSheet.create({

content:{
    flex:1,
    justifyContent: 'center',
    textAlign:'center',
    alignItems:'center'
},
text:{
    
    color:Colors.darkGreen,
    fontSize:20,
    fontFamily:'raleway-bold',
    marginVertical:10
},
iconStar:{
    flexDirection:'row',
   
},
starIcon:{
    marginTop:13
},
filter:{
    marginLeft:5,
    marginRight:20
 }
});
export default FavouritesScreen;

/*
headerRight:()=> (
    <TouchableOpacity 
    style={styles.filter} 
    onPress={()=>
    navData.navigation.navigate('Filters')
    }>
    <FontAwesome 
    name='filter' 
    size={23} 
    color={Platform.OS==='ios'?Colors.brightPurple:Colors.darkWhite}
    />
      </TouchableOpacity>
 )
 */