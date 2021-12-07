

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from "./Navigation/Navigations";



function App() {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  );
}

export default App