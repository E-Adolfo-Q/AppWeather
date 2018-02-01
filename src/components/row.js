/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  View
} from 'react-native';

const Row = (props) =>
 <View style={{ alignSelf:'stretch', flexDirection: 'row', }}>
   {props.children}
 </View>

export default Row
