
import React from 'react';
import {TouchableOpacity,StyleSheet,Image} from 'react-native';
const WeatherPreview =props => {
return  ( 
<TouchableOpacity 
onPress={props.onPress}
style={{...styles.mapPreview, ...props.style}}>  
 <Image
 style={styles.mapImage}
 source={{uri:`https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg`}}
 />
</TouchableOpacity>
);
};
const styles =StyleSheet.create({
 mapPreview:{
    justifyContent:'center' ,
    alignContent:'center'
 },
 mapImage:{
     width:' 100%',
     height:'100%'
 }
});

export default WeatherPreview;