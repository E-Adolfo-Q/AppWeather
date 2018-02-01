/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  Platform
} from 'react-native';

import styles from '../style/styles';

const isAndroid = Platform.OS === 'android'
const isIOS = Platform.OS === 'ios'

const CityPicker = (props) =>
 <Picker
  {...props}
  mode="dialog"
  style={[
    styles.picker,
    isAndroid && styles.pickerAndroid,
    isIOS && styles.pickerIOS
  ]}>
  <Picker.Item label="Santiago" value="santiago"/>
  <Picker.Item label="Milan" value="milan"/>
  <Picker.Item label="Londres" value="londres"/>
  <Picker.Item label="Buenos Aires" value="buenos+aires"/>
  <Picker.Item label="Madrid" value="madrid"/>
  <Picker.Item label="Paris" value="paris"/>
 </Picker>


export default CityPicker
