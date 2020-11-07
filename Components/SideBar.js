import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Alert,Platform,ScrollView,TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
export default class SideBar extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (

<ScrollView style={{backgroundColor:Colors.darkWhite}}>
<View style={styles.container}>
<View style={styles.headerContainer}>
<ImageBackground source={require('../assets/back.jpg')} style={styles.background} >
<View style={styles.headerTextView}>
<Text style={styles.headerText}> ESTES PARK</Text>
</View>
</ImageBackground>
</View>

<View style={styles.screenContainer}>
<TouchableOpacity 
     style={[styles.screenStyle, (this.props.activeItemKey=='Current_Tab') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('Categories')} >
<Text 
    style={[styles.screenTextStyle, (this.props.activeItemKey=='Current_Tab') ? styles.selectedTextStyle : null]} >Categories</Text>
<Ionicons style={[styles.icon, (this.props.activeItemKey=='Current_Tab')?styles.whiteIcon:styles.purpleIcon]}  
name= 'md-filing' size={18} />
</TouchableOpacity>

<TouchableOpacity
style={[styles.screenStyle, (this.props.activeItemKey=='Filters') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('Filters')}>
<Text 
style={[styles.screenTextStyle, (this.props.activeItemKey=='Filters') ? styles.selectedTextStyle : null]} >Filters</Text>
<Feather style={[styles.icon, (this.props.activeItemKey=='Filters')?styles.whiteIcon:styles.purpleIcon]} 
name='filter' size={18}/>
</TouchableOpacity>

<TouchableOpacity
style={[styles.screenStyle, (this.props.activeItemKey=='Estes_Map_Weather') ? styles.activeBackgroundColor : null]} onPress={this.navigateToScreen('Maps')} >
<Text 
style={[styles.screenTextStyle, (this.props.activeItemKey=='Estes_Map_Weather') ? styles.selectedTextStyle : null]} >Map-Weather</Text>

<Feather style={[styles.icon, (this.props.activeItemKey=='Estes_Map_Weather')?styles.whiteIcon:styles.purpleIcon]} 
name='map' size={18}/>
</TouchableOpacity>

<TouchableOpacity
style={styles.qMark} 
onPress={()=>{Alert.alert("Guide",
"1. App is simple and pretty straight-forward Swipe, Tap and Scroll.\n 2.Don't forget to save any changed Filters.\n 3.Just hit reload icon to clear Markers.\n Enjoy to your fullest!",

)}}>
<FontAwesome name='question-circle-o' size={40} color={Colors.brightPurple}/>
</TouchableOpacity>
 </View>
</View>
</ScrollView>

    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 300,
    },
    
    screenContainer: { 
        paddingTop: 10,
        width: '100%',
    },
    screenStyle: {
        height: 55,
        marginTop:30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius:15,
        borderWidth:2,
        borderColor:Colors.brightPurple
       
        
    },
    screenTextStyle:{
        fontSize: 27,
        marginLeft: 20, 
        textAlign: 'center',
        fontFamily:'raleway-bold',
        color:Colors.brightPurple
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: Colors.darkWhite
    },
    activeBackgroundColor: {
        backgroundColor: Colors.brightPurple
    },
    background:{
        flex: 1, 
        width: 360,
       justifyContent: 'center'
    },
    
Image:{
width:200,
height:30,
marginBottom:200,
marginLeft:Platform.OS === 'android' ? 23: 36,

    },
    icon:{
        marginLeft:50,
        marginTop:6,
        color:Colors.darkWhite
    },
    whiteIcon:{
        color:Colors.darkWhite
    },
    purpleIcon:{
        color:Colors.brightPurple
    },
    headerTextView:{
        width:200,
        marginLeft:Platform.OS==='ios'? 44:7,
        marginBottom:220,
        justifyContent:'center',
        borderRadius:5,
        borderWidth:3,
        borderColor:Colors.darkWhite,
        backgroundColor:Colors.brightPurple
    },
    headerText:{
       fontFamily:'raleway-bold',
       fontSize:22,
       color:Colors.darkWhite
    },
    qMark:{
        height: 40,
        marginTop:30,
        alignItems: 'center',
        justifyContent:'center',
        width: 40,
        borderRadius:25,
        borderWidth:2,
       // marginLeft:230,
       borderColor:Colors.darkWhite
    }
});