import React, { Component } from 'react';
import { Dimensions, StyleSheet, Alert ,View,Text,TouchableHighlight, Platform} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
const { width, height } = Dimensions.get('window');
import Colors from '../constants/Colors';
import { MaterialCommunityIcons} from '@expo/vector-icons';
//import RNRestart from 'react-native-restart';

const ASPECT_RATIO = width / height ;
const LATITUDE = 40.3788;
const LONGITUDE = -105.5143;
const LATITUDE_DELTA = 0.0192;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyAkwAlX2w0S3ba6OxBqr13JGDuYIi5GRZ8';

class MapScreen extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = {
      coordinates: [
        
      ],

errorMessage:'',


    };

    this.mapView = null;
  }

  


  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
      errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
    const { latitude , longitude } = location.coords
   const position = this.getGeocodeAsync({latitude, longitude});
    this.setState({ coordinates: [position] });

  };
  

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.showText}>
                                                                                                                                                    
          <Text style={styles.displayText}>Place at least two or more Markers ! </Text>
        </View>
        <View style={{flex:1}}>
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}
      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={ this.state.coordinates[0] }
            waypoints={ (this.state.coordinates.length > 2) &&(this.state.clear) ? this.state.coordinates.slice(1, -1) : null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              const distance = JSON.stringify(result.distance) *1.6; 
              const fDistance = (Math.round(distance * 100) / 100).toFixed(2);
              const duration = JSON.stringify(result.duration);
              const fDurattion =(Math.round(duration * 100) / 100).toFixed(2);
            Alert.alert("Message" ,'Total Distance: '+ fDistance + ' mi\n' + ' Driving Time: ' +fDurattion+ ' mins' );

              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
      </View>
      </View>
    );
  }
}

MapScreen.navigationOptions = navigationData =>{
  return{
    headerTitle:'Maps',
    headerRight:()=>(
      <TouchableHighlight 
          underlayColor={Colors.brightPurple}
          onPress={()=>{
           navigationData.navigation.goBack(null);
           navigationData.navigation.navigate('MapScreen');
          }}
          >
            <MaterialCommunityIcons
            name='reload'
            size={34}
            color={Platform.OS==='android'?Colors.darkWhite:Colors.brightPurple}
            />
            </TouchableHighlight> 
    )
  };
};

const styles = StyleSheet.create({

showText:{
  height:30,
  backgroundColor:Colors.brightPurple,
  alignContent:"center",
  marginTop:1
},
displayText:{
  fontFamily:'raleway-bold',
  color:Colors.darkWhite,
  textAlign:'center'
 
},
clearText:{
  textAlign:'center',
  color:Colors.darkWhite,
  fontFamily:"raleway-bold",
  fontSize:16
}

});

export default MapScreen;


