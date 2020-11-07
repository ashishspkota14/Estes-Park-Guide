import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
//import {createBottomTabNavigator} from 'react-navigation-tabs';  //if not imported this way it shows typo error
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Platform,Dimensions,} from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import PlaceScreen from '../screens/PlacesScreen';
import PlacesDetailScreen from '../screens/PlacesDetailScreen';
import Colors from '../constants/Colors';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import FeaturedScreen from '../screens/FeaturedScreen';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import LocationPreview from '../screens/LocationPreview';
import MapScreen from '../screens/MapScreen';
import Weather from '../screens/WeatherSceen';
import SideBar from '../Components/SideBar';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';


const defaultStacNavOptions = {
        headerStyle:{
            backgroundColor:Platform.OS==='android' ? Colors.brightPurple : ''
        },
        headerTitleStyle: {
            fontFamily: 'raleway-bold'
        },
        headerTintColor: Platform.OS==='android'? Colors.darkWhite : Colors.brightPurple
}; 

const EstesGuideNavigator= createStackNavigator({

    Categories: {
        screen: CategoriesScreen
    }, //mapping CategoriesScreen to Categories which makes easier to navigate
    Places: {
        screen: PlaceScreen
    },
    
    PlacesDetail:{
        screen:PlacesDetailScreen
    }, 
} ,
{   
  defaultNavigationOptions: defaultStacNavOptions
}
);

const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    PlacesDetail: PlacesDetailScreen,
}, {
    defaultNavigationOptions:defaultStacNavOptions}
);

const featuredNavigator = createStackNavigator({
    FeaturedScreen: FeaturedScreen,
    PlacesDetail:PlacesDetailScreen
},
{
  defaultNavigationOptions: defaultStacNavOptions
});


const bottomTabConfig = {
    
        Home: {
            screen: EstesGuideNavigator,
            navigationOptions:{
                tabBarLabel:'Home',
           tabBarIcon : tabInfo => {
               return (<Ionicons
               name = 'ios-home'
               size ={25}
               color = {tabInfo.tintColor} // color = {Platform.OS==='ios'?Colors.brightPurple:Colors.darkWhite}
               />
               );
           
           },
           tabBarColor: Platform.OS==='android'? Colors.brightPurple:Colors.darkWhite ,   //changing different tabBarColor
           //tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'raleway-bold',color:Colors.darkWhite}} >Home </Text> : 'Home'
       }
   },
        Featured:{

            screen: featuredNavigator,
            navigationOptions:{
                tabBarLabel: 'Featured',
                tabBarIcon : tabInfo => {
                    return (
                  <MaterialCommunityIcons
                  name = 'fire'
                  size ={25}
                  color = {tabInfo.tintColor} // color = {Platform.OS==='ios'?Colors.brightPurple:Colors.darkWhite}    //  {tabInfo.tintColor}
                  
                  />
                    );
                },
                tabBarColor:Colors.brightPurple,
                //tabBarLabel: Platform.OS === 'android' ? <Text style ={{fontFamily:'raleway-bold',color:Colors.darkWhite}}> Featured </Text> : 'Featured'
            }
        },
   
    Favourites: { 

             screen:FavNavigator,
             navigationOptions:{
             tabBarLabel: 'Favourites',
              tabBarIcon : tabInfo => {
                return ( <Ionicons
                name = 'ios-star'
                size ={25}
                color = {tabInfo.tintColor} // {Platform.OS==='ios'?Colors.brightPurple:Colors.darkWhite} //{tabInfo.tintColor}
                />
                );
            }
            ,
            tabBarColor:Colors.brightPurple,
           // tabBarLabel:<Text style={{fontFamily:'raleway-bold',color:Colors.darkWhite}} >Favourites </Text> 
            }
        }
        };
        
const placesFavTabNavigator = //Platform.OS === 'android' ? 
createMaterialTopTabNavigator(bottomTabConfig, {
 initialRouteName:'Home',
// activeColor : Colors.brightGreen,
//inactiveColor: 'grey',
//barStyle :{backgroundColor: Colors.darkPink},
tabBarPosition:'bottom',
tabBarOptions:{
    tabStyle: {
        maxHeight:50
      },

    activeTintColor:Platform.OS==='ios'? Colors.brightPurple:Colors.darkWhite ,
    inactiveTintColor: '#bdc3c7',

    style:{
        backgroundColor:Platform.OS==='android'? Colors.brightPurple:Colors.darkWhite,
        
    },
    labelStyle:{
        fontFamily:'raleway-bold',
        fontSize:12
    },
    indicatorStyle:{
        height:0,
        backgroundColor:Colors.darkWhite
    },
    showIcon:true,
    showLabel:true
},

shifting : true
})  
/*
:


createBottomTabNavigator(bottomTabConfig, {
       tabBarOptions: 
       {
        activeTintColor: Colors.brightPurple
    }
});
*/
const filterNavigator= createStackNavigator({
    Filters: FiltersScreen
}, 
{
   defaultNavigationOptions: defaultStacNavOptions
}); 

const mapAndWeatherNavigator = createStackNavigator({
    Maps: LocationPreview,
    MapScreen:MapScreen,
    Weather:Weather
},

 {
     defaultNavigationOptions: defaultStacNavOptions
 }) ;

const mainNavigator = createDrawerNavigator(
    {
        Current_Tab: { 
            screen: placesFavTabNavigator ,
                
              },
        Filters: { screen:filterNavigator},

        Estes_Map_Weather: {  screen: mapAndWeatherNavigator },

    },

    {
     contentComponent:SideBar,
  
      drawerWidth: Dimensions.get('window').width*3/4 
      },
      
    
);



export default createAppContainer(mainNavigator);

/*
 contentOptions: {
            activeTintColor: Colors.brightPurple,
            labelStyle: {
              fontFamily: 'raleway-bold'
            }
          }
          */