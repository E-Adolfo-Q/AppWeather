import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from 'react-native'

import styles from '../style/styles';

const images = {
  'buenos+aires': require('../images/buenos-aires.jpg'),
  'milan': require('../images/milan.jpg'),
  'madrid': require('../images/madrid.jpg'),
  'paris': require('../images/paris.jpg'),
  'londres': require('../images/londres.jpg'),
  'santiago': require('../images/santiago.jpg')
}

class BackgroundImage extends Component {

  state = {
    opacity: new Animated.Value(0),
    currentImage: null,
    oldImage: null
  }

  componentWillMount() {    
    this.showImageForCity(this.props.city)
  }

  componentWillReceiveProps(newProps) {   
    if (newProps.city !== this.props.city) {          
      this.showImageForCity(newProps.city)
    }
  }

  showImageForCity(city) {
    this.setState({
      currentImage: images[city],
    })
    this.state.opacity.setValue(0)
  }

  handleImageLoad() {
    Animated.timing(
      this.state.opacity,
      { toValue: 1, duration: 500, easing: Easing.easeIn }
    )
    .start(() => {
      this.setState({ oldImage: this.state.currentImage })
    });
  }

  render() {    
    const { currentImage, oldImage } = this.state
    return (
      <View style={styles.fullScreen}>
        <Image
          source={oldImage}
          style={styles.fullScreen}
        />
        <Animated.Image
          source={currentImage}
          onLoad={() => this.handleImageLoad()}
          style={[
            styles.fullScreen,
            { opacity: this.state.opacity }
          ]}
        />
      </View>
    )
  }
}


export default BackgroundImage
