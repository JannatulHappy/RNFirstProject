import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import MyStack from './navigation';

export default function App() {
  return (
   
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    fontSize: 30,
  },
});
