import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import ImageCarousel from 'react-native-image-page';

export default class example extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ImageCarousel
          height={200}
          delay={2000}
          indicatorSize={10}
          indicatorOffset={-20}
          indicatorText="✽"
          indicatorColor="red"
          renderHeader={(datum, i) => <Text>Header Image {i}</Text>}
          renderFooter={(datum, i) => <Text>Footer {i}</Text>}
          images={[{
            uri: 'https://source.unsplash.com/1024x768/?nature',
          }, {
            uri: 'https://source.unsplash.com/1024x768/?water',
          }, {
            uri: 'https://source.unsplash.com/1024x768/?girl',
          }, {
            uri: 'https://source.unsplash.com/1024x768/?tree',
          }]}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => example);