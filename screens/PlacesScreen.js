//CategoryMealScreen

import { useSelector, useDispatch }  from 'react-redux';
import React, {useEffect,useState,useCallback} from 'react';
 //import { PLACES } from '../data/places-data';
import { CATEGORIES } from '../data/categoryTitle-data';
import PlacesList from '../Components/PlacesList';
import { View, Text, StyleSheet,TouchableOpacity,Platform,ActivityIndicator} from 'react-native';
import Colors from '../constants/Colors';
import {FontAwesome} from '@expo/vector-icons';
import * as placesAction from '../store/actions/places';


const PlacesScreen= props =>{
    const CategoryId = props.navigation.getParam('categoryId');
    const availablePlaces = useSelector(state=> state.place.filteredPlaces);
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();
  
    const loadPlaces = useCallback(async () => {
      setError(null);
      setIsRefreshing(true);
      try {
        await dispatch(placesAction.fetchPlaces(),placesAction.fetchFilteredPlaces());
      } catch (err) {
        setError(err.message);
      }
      setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError]);
  
    useEffect(() => {
      const willFocusSub = props.navigation.addListener(
        'willFocus',
        loadPlaces
      );
  
      return () => {
        willFocusSub.remove(loadPlaces);
      };
    }, [loadPlaces]);
  
    useEffect(() => {
      setIsLoading(true);
      loadPlaces().then(() => {
        setIsLoading(false);
      });
    }, [dispatch, loadPlaces]);


  const displayPlaces = availablePlaces.filter(
      place =>place.categoryIds.indexOf(CategoryId) >= 0
  );
  



if(isLoading) {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator
            size='large'
            color={Colors.brightPurple}
            />
        </View>
    )
}


if (displayPlaces.length === 0 )
{
    return <View style={styles.container}>
        <Text style= {styles.text}> No places found. Maybe check your filters ? </Text>
    </View>
}

    return(

   
        <PlacesList
         onRefresh={loadPlaces}
         refreshing={isRefreshing}
        listData= {
            displayPlaces
        }
        navigation = {props.navigation}/>  // forwarding data into meal list 
    
    );
};



PlacesScreen.navigationOptions = navigationData => {
   const categoryID= navigationData.navigation.getParam('categoryId'); //getting id to use from another screen
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID); 

    return{
        headerTitle: selectedCategory.title,
        headerRight:()=> (
<TouchableOpacity 
style={styles.filter} 
onPress={()=>
navigationData.navigation.navigate('Filters')
}>
<FontAwesome 
name='filter' 
size={23} 
color={Platform.OS==='ios'?Colors.brightPurple:Colors.darkWhite}
/>
  </TouchableOpacity>
        )   
};
};

const styles= StyleSheet.create({
container:{
    flex:1,
justifyContent: 'center',
alignItems:'center'
},
text:{
    textAlign: 'center',
    color: Colors.darkGreen
},
filter:{
   marginLeft:5,
   marginRight:20
}
});
export default PlacesScreen;


/* <Button onPress={()=>navigationData.navigate('Filters') }>
    <Icon
    name="filter"
    size={33}
    color={Platform.OS === 'android'?Colors.darkWhite:Colors.brightPurple}
    />
</Button> */