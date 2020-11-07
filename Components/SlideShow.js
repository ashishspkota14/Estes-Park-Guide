import Slideshow from 'react-native-slideshow';
import React,{Component} from 'react';
export default class SlideShow extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
          // title: 'Title 1',
           // caption: 'Caption 1',
            url: 'http://placeimg.com/640/480/any',
          }, {
      
            url: 'http://placeimg.com/640/480/any', 
          }, {
          
            url: 'http://placeimg.com/640/480/any',
          }
        ]
      };
    }
   
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 2000)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
   
    render() {
      return (
      <Slideshow 
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      );
    }
  }