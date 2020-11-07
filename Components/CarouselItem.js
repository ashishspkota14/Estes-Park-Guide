import React from 'react';
import {View,Text,StyleSheet,Dimensions,ImageBackground} from 'react-native';
import Colors from '../constants/Colors';

const {width,height} =Dimensions.get('window');

const CarouselItem = ({item}) => {
    
return(
    <View style={styles.cardView}>
        <ImageBackground style={styles.image} source={{uri:item.url}}>
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.tittle} </Text>
                <Text style={styles.itemDescription}> {item.description} </Text>
            </View>
        </ImageBackground>
    </View>
);

}

const styles = StyleSheet.create({

    cardView:{
        flex:1,
        width:width-20,
        height: height/3,
        backgroundColor:Colors.darkWhite,
        margin:10,
        borderRadius:10,
        shadowColor:'grey',
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5 
    },
    textView:{
        position:'absolute',
        bottom:10,
        margin:10,
        left:5

    },
    image:{
        width:width-20,
        height:height/3,
        borderRadius:10
    },
    itemTitle:{
        color:Colors.darkWhite,
        fontSize:22,
        shadowColor:'grey',
        shadowOffset:{width:0.8,height:0.8},
        shadowOpacity:1,
        shadowRadius:3,
        marginBottom:15,
        fontFamily:'raleway-bold',
        elevation:5
    },
    itemDescription:{
        color:Colors.darkWhite,
        fontSize:12,
        shadowColor:'grey',
        shadowOffset:{width:0.8,height:0.9},
        shadowOpacity:1,
        shadowRadius:3,
        elevation:5,
        fontFamily:'raleway-bold'
    }
});

export default CarouselItem;