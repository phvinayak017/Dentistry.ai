import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './app/components/Cards';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Doglist from './app/components/Doglist';

const AppNavigator = createStackNavigator({
  first: { screen: Cards },
  second: { screen: Doglist },

});

export default createAppContainer(AppNavigator);