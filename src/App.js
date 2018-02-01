/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import CityPicker from './components/city-picker'
import WeatherBox from './components/weather-box'
import BackgroundImage  from './components/background-image'
import Row from './components/row'
import Overlay from './components/overlay'
import { getForCity } from './services/weather'
import styles from './style/styles';

class AppPicker extends Component {
 
 state = {
   city: '',
 }

 componentDidMount(){
   this.handleCityChange('buenos+aires')
 }

  handleCityChange(city){
    this.setState({
       city,
       weather: null
    })
     getForCity(city)
    .then((weather) => this.setState({ weather }))       
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.24)"
          animated
         />       
         <BackgroundImage city={this.state.city} />
         <Row>
           <Overlay />
         <CityPicker
           selectedValue={this.state.city}
           onValueChange={(city) => this.handleCityChange(city)}
         />
        </Row>
        <Row>
          <Overlay footer={true} />
          <WeatherBox weather={this.state.weather} />
        </Row>
      </View>
    );
  }
}

AppRegistry.registerComponent('AppPicker', () => AppPicker);
