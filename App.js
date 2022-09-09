import React from 'react';
import {View} from 'react-native';
import BasicScreen from './src/screen/BasicScreen';
import StyledBasicScreen from './src/screen/StyledBasicScreen';
import SCScreen from './src/screen/SCScreen';

const App = () => {
  return (
    <View>
      {/* <BasicScreen /> */}
      <StyledBasicScreen />
    </View>
  );
};

export default App;
