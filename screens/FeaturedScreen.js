import React,{useEffect,useCallback,useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import { Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import PlacesList from '../Components/PlacesList';
import {useSelector}  from 'react-redux';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import * as placesAction from '../store/actions/places';

const FeaturedScreen = props =>{
    const availablePlaces = useSelector(state=> state.place.filteredPlaces);
    const featuredPlaces = availablePlaces.filter(place=> place.id ==='p1' || place.id ==='p5'||place.id==='p3');
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

    

    return (
        <PlacesList
        onRefresh={loadPlaces}
        refreshing={isRefreshing}
        listData={featuredPlaces}
        navigation ={props.navigation}/>
    );
};


FeaturedScreen.navigationOptions = navData => { 
    return{
    headerTitle: 'Featured',
    headerLeft:() =>  (
    <HeaderButtons
    HeaderButtonComponent ={HeaderButton}>
    <Item 
    title = 'Tab'
    iconName = 'ios-menu'
    onPress = {() => {
        navData.navigation.toggleDrawer();
    }}/> 

</HeaderButtons>
),

    };
};



const styles = StyleSheet.create({
    filter:{
        marginLeft:5,
        marginRight:20
     }
});
export default FeaturedScreen;

/* headerRight:()=> (
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