import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Platform,TouchableHighlight,Button,TouchableOpacity,Alert} from 'react-native';
import { Item, HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import {setFilters} from '../store/actions/places';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const FilterSwitch = props => {
    return(
        <View style ={styles.filterContainer}>
        <Text style={styles.text}>  {props.label} </Text>
        <Switch
        trackColor ={{true: Colors.brightPurple}}
        thumbColor = {Platform.OS === 'android' ? Colors.brightPurple : Colors.darkWhite}
        value = {props.state}
        onValueChange = {  props.onChange // updating the state that user Input here
        }
        />
        </View>
    );
};
const FiltersScreen = props =>{

const {navigation} = props;  // destructor used to store it in brand new constant

 const [hasRestroom, setHasRestroom] = useState(false);   
 const [hasParking, setHasParking] = useState(false);
 const [googleStar4 , setGoogleStar4] = useState(false);

const dispatch = useDispatch();

 const saveFilters = useCallback( ()  => {
     const appliedFilters = {
         restroom: hasRestroom,
         parking: hasParking,
         googleStar: googleStar4
     };
   
     dispatch(setFilters(appliedFilters));
 }, 
 
 [ hasRestroom, hasParking, googleStar4, dispatch]
 );
 useEffect(() => {
     navigation.setParams({save: saveFilters});  // use of pointers it's just pointing it there
 }, 
 [saveFilters]
 );
 const goBack = () =>{
    props.navigation.goBack(null);  
 };
 const FinalWorks = () => {
    saveFilters(); 
    goBack();
 }

     return(
         <LinearGradient 
         colors={['#d1ccc0','#d1d8e0', '#95afc0','#d1ccc0',Colors.brightPurple]}
        style={{flex: 1}}
         >
        <View style ={styles.screen}>
            <Text style ={styles.headTitle}> Available Filters </Text> 
        
            <FilterSwitch
            label = 'Restrooms'
            state = {hasRestroom}
            onChange={ newValue => 
                setHasRestroom(newValue)   // updating the state that user Input here
             }
             
             />
           
           <FilterSwitch
            label = 'Parking'
            state = {hasParking}
            onChange={ newValue => 
                setHasParking(newValue)    // updating the state that user Input here
             }/>

      <FilterSwitch
            label = 'Google ✪ 4+'
            state = {googleStar4}
            onChange={ newValue => 
                setGoogleStar4(newValue)   // updating the state that user Input here
             }/>

              <View style ={{marginTop:15,flexDirection:'row',}}>
<TouchableOpacity style={styles.button} >
<Button
        color={Colors.brightPurple}
        title="Save Chaged Filter"
        onPress={FinalWorks}
      />
</TouchableOpacity>


</View>
</View>
</LinearGradient>
    );
};

FiltersScreen.navigationOptions = navData => { 

const save =  navData.navigation.getParam('save'); 
    return {
    headerTitle: 'Filters',
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
    )

/*
   , headerRight:() => 
    ( 
 <TouchableHighlight
 underlayColor={Platform.OS === 'ios' ? Colors.brightPurple: Colors.darkWhite}
    onPress={save}
      style={styles.starIcon}
      //onPress={ ()=>{alert(alertMsg)}}
      >
         
       <Icon 
          name ='save'
          size={33}
          color={ Platform.OS === 'ios' ? Colors.brightPurple: Colors.darkWhite }
          /> 
          
         
     </TouchableHighlight>    
        )
        */
};
};
const styles = StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center'
},
headTitle:{
    fontFamily: 'raleway-bold',
    fontSize:22,
    margin:20,
    textAlign:'center',
    color:Colors.brightPurple
},
filterContainer:{
flexDirection: 'row',
justifyContent:'space-between',
alignItems:'center',
width: '80%',
marginVertical: 10,
marginBottom:20
},
starIcon:{
    marginLeft:5,
    marginRight:20,
    overflow:'hidden'
},
text:{
fontFamily:'raleway-blackItalic',
fontSize:18,
color:Colors.brightPurple
},
button:{
    margin:15
}
});

export default FiltersScreen;