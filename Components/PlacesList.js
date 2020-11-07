import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PlacesItem from './PlacesItem';
import {useSelector} from 'react-redux'

const PlacesList = props => {
  
const favouritePlaces =  useSelector(state=> state.fav.favouritePlaces);

const renderPlaces = itemData =>{

const isFavourite = favouritePlaces.some(place => place.id === itemData.item.id);




const iconName = isFavourite ? 'star' :'star-o';

        return <PlacesItem
        id = {itemData.item.id} //not loading passing value of params caused more problem
        title= {itemData.item.title}
        image = {itemData.item.imageUrl}
        googleRating ={itemData.item.googleRating}
        address = {itemData.item.address}
        onSelectPlaces = {() => {
            props.navigation.navigate({routeName:'PlacesDetail',params:{
                whichPlaceId: itemData.item.id,
                placeTitle: itemData.item.title,
                icon: iconName,
                isFavs:isFavourite,
                website:itemData.item.website,
                phoneNumber:itemData.item.phoneNumber
            }})
        }}
        /> ;
    };

    return(
        <View style ={styles.list}>

        <FlatList
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
         data={props.listData}
         keyExtractor={(item, index)=>{
             item.id
         }}
         
         renderItem={renderPlaces}
         style ={{width:'100%'}}
         />
     </View>
    );
};

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default PlacesList;