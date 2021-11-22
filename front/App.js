import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AllSalle from './composants/views/AllSalle';


export default function App() {
  return (
    <View>
      <StatusBar style="auto"
        animated={true}
       />
      <AllSalle />
    </View>
  );
}
