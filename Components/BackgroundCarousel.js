import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 import Colors from '../constants/Colors';
import { SliderBox } from "react-native-image-slider-box";
 
export default class BackgroundCarousel extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
    <View style={styles.container}>
     <SliderBox
      images={this.props.images}
      sliderBoxHeight={200}
      dotColor={Colors.darkWhite}
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
      dotStyle={{
       width: 15,
       height: 15,
       borderRadius: 15,
       marginHorizontal: 10,
       padding: 0,
       margin: 0
     }}
     />
     </View>
   );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//{this.props.images&&this.props.images.map((image,i)=>     )