import React,{useEffect} from'react';
import { FlatList, StyleSheet} from 'react-native';
import { CATEGORIES } from '../data/categoryTitle-data';
import CategoryGridView from '../Components/CategoryGridView';
import { Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import {useDispatch} from 'react-redux';
import * as placesActions from '../store/actions/places';

//import menuIcon from '../assets/images/menuIcon.png';
//import {Ionicons} from '@expo/vector-icons';
const CategoriesScreen = props =>{ 
const dispatch = useDispatch();

useEffect(()=>{
dispatch(placesActions.fetchFilteredPlaces())
},[dispatch]);

    const renderGridItem =itemData => {
        return (
         
            <CategoryGridView
            title={itemData.item.title}
            color ={itemData.item.color}
            imageUri={itemData.item.imageUri}
            onSelect={ () => {
            props.navigation.navigate({routeName : 'Places', params:{
            categoryId: itemData.item.id  // passing data into other screen with help of param in navigating screens
            }
        });
    }} 
    />
  
        );
    };

    return(
    <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
         numColumns={1} // numColumn is function that set no of columns - grid view
         />
    );
};
    
        
    
CategoriesScreen.navigationOptions = navData => { 
    return{
    headerTitle: 'Your College',
    headerLeft:() =>  <HeaderButtons
    HeaderButtonComponent ={HeaderButton}>
    <Item 
    title = 'test'
    iconName = 'ios-menu'
    onPress = {() => {
        navData.navigation.toggleDrawer();
    }}/>

</HeaderButtons>
    };
};

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});

export default CategoriesScreen;