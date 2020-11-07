import React from 'react';
import {TouchableOpacity,StyleSheet,Image} from 'react-native';
const MapPreview =props => {
    
return  ( 
<TouchableOpacity 
onPress={props.onPress}
style={{...styles.mapPreview, ...props.style}}>  
 <Image
 style={styles.mapImage}
 source={{uri:`https://maps.googleapis.com/maps/api/staticmap?center=Estes+Park,CO&zoom=13&scale=1&size=600x300&maptype=roadmap&key=AIzaSyAkwAlX2w0S3ba6OxBqr13JGDuYIi5GRZ8&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CEstes+Park+Visitor+Center`}}
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

export default MapPreview;